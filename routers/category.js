const Router = require('koa-router');
const router = new Router();
// 可以都放到index里？
const user_operate = require('../Control/category');

router.get('/category', user_operate.getCategory);
router.post('/category', user_operate.addCategory);
router.post('/category', user_operate.editCategory);
router.post('/category', user_operate.delCategory);



module.exports = router;