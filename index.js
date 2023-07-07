const express = require("express");
require('dotenv').config();
const routers = require("./routers/router");

const PORT = process.env.PORT;

const app = express();

app.use("/api", routers);

app.listen(PORT, () => {
    console.log("Server Started PORT:" + PORT);
})
