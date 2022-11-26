const JWT = require("jsonwebtoken");
const SECRET = "Hi Iam Monzer";
module.exports = {
    sign: (data) => {
        return JWT.sign(data, SECRET)
    },

    verify: (token) => {
        return JWT.verify(token, SECRET)
    },

    authenticateUser: async (user) => {
        return {
            token: JWT.sign({username: user.username, user_id: user.id}, SECRET),
            user_profile: {username: user.username, user_id: user.id}
        }
    }
}