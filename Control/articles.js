/*
    * @Author: Jayshi
    * @Date: 2020.04.12
    * @Description: 文章列表
*/

// 使用schema
const Articles = require('../Schema/articles');
// 重新连接表


// 操作方法
// 获取文章列表
const getArticles = async (ctx, next) => {

    const article = await Articles.find();
    if (article) {
        ctx.body = {
            code: 200,
            data: article
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};
// 添加、编辑文章
const addArticles = async (ctx, next) => {
    const req = ctx.request.body;
    const findCategoryValue = await Articles.findOne({value: req.value});

    if (req.type === 'add') {
        if (findCategoryValue) {
            ctx.body = {
                code: 400,
                msg: '添加失败，已经存在该分类'
            }
        } else {
            const categoryAdd = await Articles.create({value: req.value});
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
        const categoryEdit = await Articles.updateOne({ _id: req._id }, req);
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
        const categoryDel = await Articles.deleteOne({value: req.value});
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
    getArticles,
    addArticles
};