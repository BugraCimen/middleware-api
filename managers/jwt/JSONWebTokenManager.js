const jwt = require("jsonwebtoken");
class JSONWebTokenManager {
    static generateJWT(user) {
        const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

        const payload = user;

        const token = jwt.sign(payload, JWT_SECRET_KEY, {
            expiresIn: JWT_EXPIRE,
        })

        return token;
    }

    static decodeAccessToken({ jwt_secret_key, access_token }) {
        return jwt.verify(access_token, jwt_secret_key,(err,decoded)=>{
            if(err){
                return false;
            }
            return true;
        });
    }

    static getAccessTokenFromHeader(req) {
        const authorization = req.headers.authorization;
        const access_token = authorization.split(" ")[1];
        return access_token
    }

    static isTokenIncluded(req) {
        return req.headers.authorization && req.headers.authorization.startsWith("jwt= ");
    }
}

module.exports = JSONWebTokenManager;