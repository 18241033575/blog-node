/*
    * @Author: Jayshi
    * @Date: 2019.12.23
    * @Description: 分类列表
*/

// 使用schema
const Category = require('../Schema/category');
// 操作方法
// 获取分类列表
const getCategoryList = async (ctx, next) => {
    const req = ctx.request.body;

    const category = await Category.find({isShow: 1});
    console.log(1);
    console.log(category);

    if (category) {
       ctx.body = {
            code: 200,
            data: category
        }
    } else {
        ctx.body = {
            code: 400,
            msg: 'category'
        }
    }
};

// 编辑分类
const editCategory = async (ctx, next) => {
  const req = ctx.request.body;


};

// 删除分类
const delCategory = async (ctx, next) => {
  const req = ctx.request.body;
};

module.exports = {
    getCategoryList,
    editCategory,
    delCategory
};