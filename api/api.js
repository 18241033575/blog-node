const Koa = require('koa');
const app = new Koa();
const cors = require("koa2-cors");
app.use(cors());


const category = require('../routers/category');
const links = require('../routers/links');
const projects = require('../routers/projects');

const netUser = require('../routers/netUser');
const netSetting = require('../routers/netSetting');
const administrator = require('../routers/administrator');
const disclaimer = require('../routers/disclaimer');
const user = require('../routers/user');


app.use(category.routes()).use(category.allowedMethods());
app.use(links.routes()).use(links.allowedMethods());
app.use(projects.routes()).use(projects.allowedMethods());
app.use(netUser.routes()).use(netUser.allowedMethods());
app.use(netSetting.routes()).use(netSetting.allowedMethods());
app.use(administrator.routes()).use(administrator.allowedMethods());
app.use(disclaimer.routes()).use(disclaimer.allowedMethods());
app.use(user.routes()).use(user.allowedMethods());

module.exports = app;