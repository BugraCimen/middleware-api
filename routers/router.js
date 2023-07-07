const express = require("express");
const auth = require("./authorization");
const users = require("./users");

// ' /api ' is this here 
const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);

module.exports = router;