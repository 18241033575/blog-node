/*
    * @Author: Jayshi
    * @Date: 2019.12.23
    * @Description: 分类列表
*/

// 使用schema
const Category = require('../Schema/category');
// 操作方法
// 获取分类列表
const getCategory = async (ctx, next) => {
    const req = ctx.request.body;

    const category = await Category.find();
    if (category) {
        ctx.body = {
            code: 200,
            data: category
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};
// 添加分类
const addCategory = async (ctx, next) => {
  const req = ctx.request.body;
  const category = await Category.insert({ value: req.value });
    if (category) {
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
};


// 编辑分类
const editCategory = async (ctx, next) => {
    const req = ctx.request.body;
    if (req.type !== 'edit' && !req.id) {
        ctx.body = {
            code: 400,
            msg: '参数有误'
        };
        return
    }

    const category = await Category.update({id: req.id},{$set: {value: req.value}});
    if (category) {
        ctx.body = {
            code: 200,
            msg: '修改成功'
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '修改失败'
        }
    }
};

// 删除分类
const delCategory = async (ctx, next) => {
    const req = ctx.request.body;
    const category = await Category.remove({id: req.id},{ justOne: true })
    if (category) {
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
};

module.exports = {
    getCategory,
    addCategory,
    editCategory,
    delCategory
};