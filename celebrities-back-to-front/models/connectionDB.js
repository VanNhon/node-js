// Load module
var mysql = require('mysql');
// Initialize pool
var pool      =    mysql.createPool({
    connectionLimit : 10,
    host     : '127.0.0.1',
    user     : 'root',
    password : ' ',
    database : 'showbiz',
    debug    :  false
});
module.exports = pool;