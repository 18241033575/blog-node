/*
    * @Author: Jayshi
    * @Date: 2020.06.09
    * @Description: 博客用户登陆
*/

// 使用schema
const blogUser = require('../Schema/blogUser');
// 重新连接表


// 登录获取登陆信息
const userLogin = async (ctx, next) => {
    const req = ctx.request.body;
    console.log(req);
    const user = await blogUser.findOne({account: req.account, password: req.password});
    console.log(user);
    if (user) {
        ctx.body = {
            code: 200,
            data: user,
            msg: '登陆成功'
        }
    } else {
        const userCount = await blogUser.findOne({account: req.account});
        if (userCount) {
            ctx.body = {
                code: 400,
                msg: '密码错误'
            }
        }else {
            ctx.body = {
                code: 400,
                msg: '未查到该用户'
            }
        }
    }
};

const userRegister = async (ctx, next) => {
    const req = ctx.request.body;
    const user = await blogUser.findOne({account: req.account});
    if (user) {
        ctx.body = {
            code: 400,
            msg: '该账户已存在'
        }
    } else {
        if (!req.account) {
            ctx.body = {
                code: 400,
                msg: '请输入账号'
            };
            return
        }
        if (!req.password) {
            ctx.body = {
                code: 400,
                msg: '请输入密码'
            };
            return
        }
        req.focus = 0;
        const userCreate = await blogUser.create(req);
        if (userCreate) {
            delete userCreate.password;
            ctx.body = {
                code: 200,
                msg: '注册成功',
                data: userCreate
            }
        }else {
            ctx.body = {
                code: 400,
                msg: '注册失败'
            }
        }

    }
};


const userFocus = async (ctx, next) => {
    const req = ctx.request.body;
    const blogUserFocus = await blogUser.updateOne({ account: req.account }, { focus: req.focus });
    if (blogUserFocus.n === 1 && blogUserFocus.nModified === 1 && blogUserFocus.ok === 1) {
        ctx.body = {
            code: 200,
            msg: '关注成功'
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '关注失败'
        }
    }
};

module.exports = {
    userLogin,
    userRegister,
    userFocus
};