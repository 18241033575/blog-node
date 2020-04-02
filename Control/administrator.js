/*
    * @Author: Jayshi
    * @Date: 2020.04.01
    * @Description: 管理员
*/

// 使用schema
const Administrator = require('../Schema/administrator');
// 重新连接表


// 操作方法
// 获取管理员列表
const getAdministrator = async (ctx, next) => {
    const administrator = await Administrator.find({auth: {$gte: 5}});
    if (administrator) {
        ctx.body = {
            code: 200,
            data: administrator
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};

const setAdministrator = async (ctx, next) => {
    const req = ctx.request.body;
    console.log(req.type);
    switch (req.type) {
        case 'neAdmin':     // 获取非管理员列表
            const administrator = await Administrator.find({auth: {$lt: 5}});
            if (administrator) {
                ctx.body = {
                    code: 200,
                    data: administrator
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: '数据库错误'
                }
            }
            break;
        case 'addAdmin':    // 添加为管理员

            const midFind = await Administrator.find({ name: req.name });
            let midData = midFind[0];
            console.log(midData);
            midData.auth = 5;
            /// 单独更新失败
            const administratorAdd = await Administrator.updateOne({ name: req.name }, midData);
            console.log(administratorAdd);
            if (administratorAdd.n === 1 && administratorAdd.nModified === 1 && administratorAdd.ok === 1) {
                ctx.body = {
                    code: 200,
                    msg: '添加成功'
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: '添加失败'
                }
            }
            break;
        case 'delAdmin':    // 删除管理员
            const administratorDel = await Administrator.updateOne({ _id: req._id }, {auth: 1});
            if (administratorDel.n === 1 && administratorDel.nModified === 1 && administratorDel.ok === 1) {
                ctx.body = {
                    code: 200,
                    msg: '删除成功'
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: '删除失败'
                }
            }
            break;
        default:
            ctx.body = {
                code: 400,
                msg: '未知的type类型'
            };
            break

    }
};


module.exports = {
    getAdministrator,
    setAdministrator
};