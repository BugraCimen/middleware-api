const { createHash } = require("crypto");
class HashManager {
    static generateHash(plain_text) {
        let hash = createHash('sha1');
        let data = hash.update(plain_text,'utf-8');
        let cipher_text = data.digest().slice(0,16).toString('base64')

        return cipher_text.toString().trim();
    }
}

module.exports = HashManager;