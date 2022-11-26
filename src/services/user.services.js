const User = require("../models/user");
const {
    compare,
    hash
} = require("../helpers/passwords");
const {authenticateUser} = require("../helpers/jwt");

module.exports = {
    createUser: async (user) => {
        try {
            user.password = await hash(user.password)
            return await User.create(user)
        } catch (error) {
            return error
        }

    },

    loginUser: async (args) => {

        try {

            let user = await User.findOne({
                where: {
                    username: args.username
                }
            })

            if (!user)
                return {
                    message: "User not found!"
                }

            let passwordState = compare(args.password, user.password)
            if (passwordState)
                return await authenticateUser(user)

            return {message: "not autherozed"}
                
        } catch (error) {
            return error
        }
    }
}