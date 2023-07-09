const pool = require("../database/pg-connection");
const JSONWebTokenManager = require("./jwt/JSONWebTokenManager");
class UserManager {
    static async getAllUser() {
        try {
            let users = [
                { id: 1, name: "İsa Gökçe", age: 16 },
                { id: 2, name: "Melisa Gökçe", age: 24 },
                { id: 3, name: "Buğra Çimen", age: 27 }
            ]
            return { status: true, data: users }
        } catch (error) {
            console.log(error)
            return { status: false, data: [] }
        }
    }

    static async checkExistUser(username, email) {

    }

    static async login({ user }) {
        try {
            let query = `SELECT user_name,user_email,user_created_at FROM \"users\" WHERE (user_name='${user.user_name}' or user_email='${user.user_email}') and user_password='${user.user_password}'`;
            let res = await pool.query(query);

            if (res.rowCount > 0) {
                return { status: true, data: res.rows[0] }
            } else {
                return { status: false, data: [] }
            }
        } catch (error) {
            console.log(error)
            return { status: false, data: [] }
        }
    }

    static async register({ user }) {
        try {
            let query = `INSERT INTO \"users\" (user_name,user_password,user_email) VALUES ('${user.user_name}','${user.user_password}','${user.user_email}')`;
            let res = await pool.query(query);

            let token = JSONWebTokenManager.generateJWT(user);
            console.log(token)
            return { status: true, data: user }
        } catch (error) {
            console.log(error)
            return { status: false, data: [] }
        }
    }
}

module.exports = UserManager;