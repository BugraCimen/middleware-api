const express = require("express");
const asyncHandler = require("express-async-handler");
const HashManager = require("../managers/HashManager");
const JSONWebTokenManager = require("../managers/jwt/JSONWebTokenManager");
const UserManager = require("../managers/UserManager");
const router = express.Router();

router.post("/login", asyncHandler(async (req, res, next) => {
    let user = {
        user_name: req.body.username,
        user_password: HashManager.generateHash(req.body.password),
        user_email: req.body.email
    }

    let login_res = await UserManager.login({ user: user });

    if (login_res.status) {
        const token = JSONWebTokenManager.generateJWT(user);

        const { JWT_COOKIE, NODE_ENV } = process.env;

        res.status(200)
            .cookie("jwt", token, {
                httpOnly: true,
                expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000),
                secure: NODE_ENV === "development" ? false : true
            })
            .json({
                ...login_res,jwt:token
            })
    } else {
        res.status(400).send(login_res);
    }
}))

router.post("/register", asyncHandler(async (req, res, next) => {
    let user = {
        user_name: req.body.username,
        user_password: HashManager.generateHash(req.body.password),
        user_email: req.body.email
    }
    let users_res = await UserManager.register({ user: user });
    res.send(users_res);
}))

module.exports = router;