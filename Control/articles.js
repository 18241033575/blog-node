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
    const title = ctx.query.title;  // 根据标题获取文章
    const tag = ctx.query.tag;      // 根据标签获取文章
    const hot = ctx.query.hot;      // 根据热度获取文章 -- 后续功能
    let article;
    if (hot) {
        article = await Articles.find({ hot: true }).sort({_id: -1})
    } else {
        article = title ? await Articles.find({title, hot: false}).sort({_id: -1}) : (tag ? await Articles.find({"tags": {$regex: tag}, hot: false}).sort({_id: -1}) :await Articles.find({hot: false}).sort({_id: -1}));
    }
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
    console.log(req);
    if (req.type === 'add') {
        const findArticleValue = await Articles.findOne({title: req.title});
        if (findArticleValue) {
            ctx.body = {
                code: 400,
                msg: '添加失败，已经存在该文章'
            }
        } else {
            const categoryAdd = await Articles.create({title: req.title, tags: req.tags, content: req.content, intro: req.intro, hot: req.hot});
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
        const articleEdit = await Articles.updateOne({ _id: req._id }, req);
        if (articleEdit.n === 1 && articleEdit.nModified === 1 && articleEdit.ok === 1) {
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
        const articleDel = await Articles.deleteOne({title: req.title});
        if (articleDel) {
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