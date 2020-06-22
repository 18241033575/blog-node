/*
    * @Author: Jayshi
    * @Date: 2020.06.22
    * @Description: 关于我的
*/

// 使用schema
const AboutMe = require('../Schema/aboutMe');
// 重新连接表


// 操作方法
// 获取分类列表
const getAboutMe = async (ctx, next) => {

    const aboutMe = await AboutMe.find();
    if (aboutMe) {
        ctx.body = {
            code: 200,
            data: aboutMe
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};
// 更新免责声明
const editAboutMe = async (ctx, next) => {
    const req = ctx.request.body;

    const aboutMeSign = await AboutMe.find();
    if (aboutMeSign.length > 0) {
        aboutMeSign.content = req.content;
        const aboutMeEdit = await AboutMe.updateOne({_id: aboutMeSign[0]._id}, aboutMeSign);
        if (aboutMeEdit.n === 1 && aboutMeEdit.nModified === 1 && aboutMeEdit.ok === 1) {
            ctx.body = {
                code: 200,
                msg: '更新成功'
            }
        } else if(aboutMeEdit.n === 1 && aboutMeEdit.nModified === 0 && aboutMeEdit.ok === 1){
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
        const aboutMeAdd = await AboutMe.create({content: req.content});
        if (aboutMeAdd) {
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
    getAboutMe,
    editAboutMe
};