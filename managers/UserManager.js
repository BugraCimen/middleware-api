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
}

module.exports = UserManager;