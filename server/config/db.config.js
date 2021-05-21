  require('dotenv').config();
  const env = process.env;

let config = ({
  host: env.MYSQL_HOST,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASS,
  database: env.MYSQL_DB,
  waitForConnections: true,
  connectionLimit: env.MYSQL_LIMIT,
  queueLimit: 0
})

module.exports = config;