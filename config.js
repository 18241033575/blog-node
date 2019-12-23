/*
    * @Author: Jayshi
    * @Date: 2019.12.22
    * @Description: config file
*/

module.exports = {
  port: 8088, // 项目启动的端口
  db: 'mongodb://localhost:27017/blog', // 数据库
  saltTimes: 3 // 加盐的次数（用户密码加密）
};