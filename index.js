const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const routers = require("./routers/router");
const customErrorHandler = require("./middlewares/customErrorHandler");
const initDb = require("./database/pg-init-db");


const PORT = process.env.PORT;

const app = express();

initDb();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

console.log(`123`)

app.use("/api", routers);

app.listen(PORT, () => {
    console.log("Server Started PORT:" + PORT);
})
