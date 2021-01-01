const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'irriga'
})

module.exports = pool;