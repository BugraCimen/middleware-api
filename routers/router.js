const express = require("express");
const auth = require("./authorization");
const sign = require("./sign");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

// ' /api ' is this here 
const router = express.Router();

router.use("/auth",getAccessToRoute ,auth);
router.use("/sign", sign);

module.exports = router;