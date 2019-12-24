const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require("koa2-cors");

const config = require('./config');

const { join } = require('path');
// import mongoose from 'mongoose'

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(bodyParser());


const category = require('./routers/category');
app.use(category.routes()).use(category.allowedMethods());





app.listen(config.port, () => {
   console.log(`服务器运行在${config.port}端口`);
});