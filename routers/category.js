const Router = require('koa-router');
const router = new Router();

const user_operate = require('../Control/category');

router.get('/category', user_operate.getCategoryList);



module.exports = router;