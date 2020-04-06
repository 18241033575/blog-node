/*
    * @Author: Jayshi
    * @Date: 2019.12.23
    * @Description: 分类列表
*/

// 使用schema
const Category = require('../Schema/category');
// 重新连接表


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
// 添加、编辑分类
const addCategory = async (ctx, next) => {
    const req = ctx.request.body;
    const findCategoryValue = await Category.findOne({value: req.value});

    if (req.type === 'add') {
        if (findCategoryValue) {
            ctx.body = {
                code: 400,
                msg: '添加失败，已经存在该分类'
            }
        } else {
            const categoryAdd = await Category.create({value: req.value});
            if (categoryAdd) {
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
        }
    } else if(req.type === 'edit') {
        const categoryEdit = await Category.updateOne({ _id: req._id }, req);
        if (categoryEdit.n === 1 && categoryEdit.nModified === 1 && categoryEdit.ok === 1) {
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
    }else {
        const categoryDel = await Category.deleteOne({value: req.value});
        if (categoryDel) {
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
    }
};



module.exports = {
    getCategory,
    addCategory
};