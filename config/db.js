const mysql = require('mysql2/promise');

var pool =  mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'apmcov19'
})

module.exports = pool;