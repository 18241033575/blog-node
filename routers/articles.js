const Router = require('koa-router');
const router = new Router();
// 可以都放到index里？
const articles = require('../Control/articles');

router.get('/articles', articles.getArticles);
router.post('/articles', articles.addArticles);
// router.post('/category', user_operate.editCategory);
// router.post('/category', user_operate.delCategory);



module.exports = router;