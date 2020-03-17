const Router = require('koa-router');
const router = new Router();
// 可以都放到index里？
const user_projects = require('../Control/projects');

router.get('/projects', user_projects.getProjects);
router.post('/projects', user_projects.setProjects);


module.exports = router;