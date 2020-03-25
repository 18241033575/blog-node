const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require("koa2-cors");
const mongoose = require('mongoose');

const config = require('./config');

const { join } = require('path');
// import mongoose from 'mongoose'

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(bodyParser());

mongoose.connect(config.db, {useNewUrlParser:true}, (err) => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
});
const category = require('./routers/category');
const links = require('./routers/links');
const projects = require('./routers/projects');
const netUser = require('./routers/netUser');
const netSetting = require('./routers/netSetting');


app.use(category.routes()).use(category.allowedMethods());
app.use(links.routes()).use(links.allowedMethods());
app.use(projects.routes()).use(projects.allowedMethods());
app.use(netUser.routes()).use(netUser.allowedMethods());
app.use(netSetting.routes()).use(netSetting.allowedMethods());





app.listen(config.port, () => {
   console.log(`服务器运行在${config.port}端口`);
});