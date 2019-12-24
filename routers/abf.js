const fs = require('fs');
const path = require('path');

let base_path = __dirname + '/controllers'    //要遍历文件所在目录，我们固定为 congtrollers文件夹
let file_path = '/'                           //默认文件路由为/


module.exports = registerRouter;