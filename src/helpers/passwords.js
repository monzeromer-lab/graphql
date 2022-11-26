const bcryptjs = require("bcryptjs");

module.exports = {
    compare: async (userPassword, DBpassword) => {
        return await bcryptjs.compare(userPassword, DBpassword)
    },

    hash: async (userPassword) => {
        let salt = await bcryptjs.genSalt(10);
        return await bcryptjs.hash(userPassword, salt);
    }
}