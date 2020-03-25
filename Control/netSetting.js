/*
    * @Author: Jayshi
    * @Date: 2020.3.25
    * @Description: 网站设置
*/

// 使用schema
const NetSetting = require('../Schema/netSetting');


// 操作方法
// 获取分类列表
const getNetSetting = async (ctx, next) => {

    const netSet = await NetSetting.find();
    if (netSet) {
        ctx.body = {
            code: 200,
            data: netSet
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};
// 添加、编辑分类
const setNetSetting = async (ctx, next) => {
    const req = ctx.request.body;

    const netSetEdit = await NetSetting.updateOne({ _id: req._id }, req);
    if (netSetEdit.n === 1 && netSetEdit.nModified === 1 && netSetEdit.ok === 1) {
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
    getNetSetting,
    setNetSetting
};