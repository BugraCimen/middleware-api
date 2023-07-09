const express = require("express");
const UserManager = require("../managers/UserManager");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.get("/getUsers", asyncHandler(async (req, res, next) => {
    let users_res = await UserManager.getAllUser();
    res.send(users_res);
}))



module.exports = router;
