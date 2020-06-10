const Router = require('koa-router');
const router = new Router();
// 可以都放到index里？
const blogUser = require('../Control/blogUser');

router.post('/blog_login', blogUser.userLogin);
router.post('/blog_register', blogUser.userRegister);
router.post('/blog_focus', blogUser.userFocus);



module.exports = router;