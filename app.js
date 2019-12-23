const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const router = require('./routers/index');



const { join } = require('path');
// import mongoose from 'mongoose'

const app = new Koa();
app.use(logger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());






app.listen('8888', () => {
   console.log('服务器运行在3000端口');
});