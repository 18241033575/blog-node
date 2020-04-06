const Router = require('koa-router');
const router = new Router();
// 可以都放到index里？
const disclaimer = require('../Control/disclaimer');

router.get('/disclaimer', disclaimer.getDisclaimer);
router.post('/disclaimer', disclaimer.editDisclaimer);


module.exports = router;