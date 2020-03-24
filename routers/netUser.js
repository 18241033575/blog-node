const Router = require('koa-router');
const router = new Router();

const netUser = require('../Control/netUser');

router.get('/netUser', netUser.getNetUser);
router.post('/netUser', netUser.setNetUser);
// router.post('/category', user_operate.editCategory);
// router.post('/category', user_operate.delCategory);



module.exports = router;