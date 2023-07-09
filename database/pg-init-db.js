const pool = require("./pg-connection");
const { readFile } = require("fs");

const SQL_PATHS = [
    "/models/createUserTable.sql"
]

async function initDb() {
    for (let i = 0; i < SQL_PATHS.length; i++) {
        readFile(__dirname + SQL_PATHS[i], "utf-8", function (err, data) {
            if (err) {
                console.log(err)
                
            }
            pool.query(data, (err, res) => {
                if (err) {
                    console.log(err)
                }
                return res;
            })
        })
    }

}

module.exports = initDb;