/*
    * @Author: Jayshi
    * @Date: 2020.04.06
    * @Description: 免责声明
*/

// 使用schema
const Disclaimer = require('../Schema/disclaimer');
// 重新连接表


// 操作方法
// 获取分类列表
const getDisclaimer = async (ctx, next) => {

    const disclaimer = await Disclaimer.find();
    if (disclaimer) {
        ctx.body = {
            code: 200,
            data: disclaimer
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};
// 更新免责声明
const editDisclaimer = async (ctx, next) => {
    const req = ctx.request.body;

    const disclaimerSign = await Disclaimer.find();
    if (disclaimerSign.length > 0) {
        disclaimerSign.content = req.content;
        const disclaimerEdit = await Disclaimer.updateOne({_id: disclaimerSign[0]._id}, disclaimerSign);
        if (disclaimerEdit.n === 1 && disclaimerEdit.nModified === 1 && disclaimerEdit.ok === 1) {
            ctx.body = {
                code: 200,
                msg: '更新成功'
            }
        } else if(disclaimerEdit.n === 1 && disclaimerEdit.nModified === 0 && disclaimerEdit.ok === 1){
            ctx.body = {
                code: 400,
                msg: '更新失败,内容没有修改'
            }
        }else {
            ctx.body = {
                code: 400,
                msg: '更新失败'
            }
        }
    } else {
        const disclaimerAdd = await Disclaimer.create({content: req.content});
        if (disclaimerAdd) {
            ctx.body = {
                code: 200,
                msg: '更新成功'
            }
        } else {
            ctx.body = {
                code: 400,
                msg: '更新失败'
            }
        }
    }


};


module.exports = {
    getDisclaimer,
    editDisclaimer
};