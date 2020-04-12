const Koa = require('koa');
const app = new Koa();
const cors = require("koa2-cors");
app.use(cors());



module.exports = app;