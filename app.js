// const Koa = require('koa');
const app = require('./api/api');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const mongoose = require('mongoose');

const config = require('./config');

const { join } = require('path');

// const app = new Koa();
app.use(logger());
app.use(bodyParser());

mongoose.connect(config.db, {useNewUrlParser:true}, (err) => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
});






app.listen(config.port, () => {
   console.log(`服务器运行在${config.port}端口`);
});