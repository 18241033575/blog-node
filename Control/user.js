/*
    * @Author: Jayshi
    * @Date: 2020.04.09
    * @Description: 登陆
*/

// 使用schema
const User = require('../Schema/user');
// 重新连接表


// 登录获取登陆信息
const userLogin = async (ctx, next) => {
    const req = ctx.request.body;
    const user = await User.findOne({name: req.username, password: req.password});
    if (user) {
        ctx.body = {
            code: 200,
            data: user,
            msg: '登陆成功'
        }
    } else {
        const userCount = await User.findOne({name: req.username});
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




module.exports = {
    userLogin
};