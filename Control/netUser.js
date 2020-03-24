/*
    * @Author: Jayshi
    * @Date: 2020.3.24
    * @Description: 网络用户
*/

// 使用schema
const NetUser = require('../Schema/netUser');


// 操作方法
// 获取分类列表
const getNetUser = async (ctx, next) => {

    const netUser = await NetUser.find();
    if (netUser) {
        ctx.body = {
            code: 200,
            data: netUser
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};
// 添加、编辑分类
const setNetUser = async (ctx, next) => {
    const req = ctx.request.body;

    const netUserEdit = await NetUser.updateOne({ _id: req._id }, req);
    if (netUserEdit.n === 1 && netUserEdit.nModified === 1 && netUserEdit.ok === 1) {
        ctx.body = {
            code: 200,
            msg: '编辑成功'
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '编辑失败'
        }
    }
};


module.exports = {
    getNetUser,
    setNetUser
};