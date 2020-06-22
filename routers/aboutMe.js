const Router = require('koa-router');
const router = new Router();
// 可以都放到index里？
const aboutMe = require('../Control/aboutMe');

router.get('/aboutme', aboutMe.getAboutMe);
router.post('/aboutme', aboutMe.editAboutMe);


module.exports = router;