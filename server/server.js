const express = require('express');
const mysql = require('mysql');

// 创建连接池
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'myApp'
});
// 创建web服务器
const app = express();
app.listen(8088);
console.log('aaa');
app.post('/login', (req, res) => {
  let name = req.query.username;
  let password = req.query.password;
  let sql = `select * from user where username=${name}`;
  app.query(sql, (err, result) => {
    if(err) throw err;
    let res = result;
    if(res.length === 0) {
      res.send({ok: false, code: 404, msg: '此用户不存在'});
    } else if(res[password] !== password) {
      res.send({ok: false, code: 500, msg: '用户密码错误'});
    } else {
      res.send({ok: true, code: 200, msg: '登录成功'});
    }
    res.end();
  })
});
app.post('./reg', (req, res) => {
  let name = req.query.username;
  let password = req.query.password;
  app.query(`select * from user where username=?`, [name], (err, result) => {
    if(result.length !== 0) {
      res.send({ok: false, code: 500, msg: '用户名已存在'});
    }
    res.end();
  });
  app.query(`insert into user values (null, ?, ?)`, [name,password], (err, result) => {
    if(err)throw err;
    res.send({ok: true, code: 200, msg: '注册成功'})
    res.end();
  });
});

