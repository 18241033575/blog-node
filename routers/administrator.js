const Router = require('koa-router');
const router = new Router();
// 可以都放到index里？
const administrator = require('../Control/administrator');

router.get('/administrator', administrator.getAdministrator);
router.post('/administrator', administrator.setAdministrator);
// router.post('/category', user_operate.editCategory);
// router.post('/category', user_operate.delCategory);



module.exports = router;