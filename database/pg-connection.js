const Pool = require('pg').Pool
const db = require("./config/config.json");

let config = {
    user: db.development.username,
    host: db.development.host,
    database: db.development.database,
    password: db.development.password,
    port: db.development.PORT,
}
const pool = new Pool(config)

console.log(config)

console.log("PostgreSQL Server connected!")
module.exports = pool;