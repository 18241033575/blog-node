const Router = require('koa-router');
const router = new Router();

const netSetting = require('../Control/netSetting');

router.get('/netSetting', netSetting.getNetSetting);
router.post('/netSetting', netSetting.setNetSetting);



module.exports = router;