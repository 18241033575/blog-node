/*
    * @Author: Jayshi
    * @Date: 2019.12.23
    * @Description: 分类列表
*/

// 使用schema
const Category = require('../Schema/category');

// 操作方法
const getCategoryList = async (ctx, next) => {
    const req = ctx.request.body;

    const test = await User.find({
        status: req.status
    }, { _id: 0 });

    if (test) {
        ctx.status = 200;
        ctx.body = {
            code: 200,
            data: test
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '操作失败'
        }
    }
};

module.exports = {
    getCategoryList
};