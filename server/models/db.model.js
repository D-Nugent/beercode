const mysql = require('mysql');
const config = require('../config/db.config');
const pool = mysql.createPool(config)

let connectionStart = () => {
pool.getConnection(err => {
  err ? console.error('error' + err.message):console.log(`Connected to ${process.env.MYSQL_DB}`);
})
} 

let connectionEnd = () => {
pool.end(err => {
  err ? console.error('error: ' + err.message):console.log(`Connection to ${process.env.MYSQL_DB} closed`);
})
} 

module.exports = {
pool,
connectionStart,
connectionEnd
}