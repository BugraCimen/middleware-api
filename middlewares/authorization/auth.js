const CustomErrorManager = require("../../managers/CustomErrorManager")
const jwt = require("jsonwebtoken");
const JSONWebTokenManager = require("../../managers/jwt/JSONWebTokenManager");


const getAccessToRoute = (req, res, next) => {
    if (!JSONWebTokenManager.isTokenIncluded(req)) {
        res.status(401).send({ message: "You are not authorized to access this route.", status: 401 });
        return 401;
        // 
    } else {
        const { JWT_SECRET_KEY } = process.env;
        const access_jwt = JSONWebTokenManager.getAccessTokenFromHeader(req);
        let result = JSONWebTokenManager.decodeAccessToken({ access_token: access_jwt, jwt_secret_key: JWT_SECRET_KEY });
        if(result){
            next();
        }else{
            res.status(401).send({ message: "You are not authorized to access this route.", status: 401 });
            return;
        } 
    }
}


module.exports = {
    getAccessToRoute
}