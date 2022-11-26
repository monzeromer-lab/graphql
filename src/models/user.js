const sequlize = require("../db/connection");
const {
    DataTypes
} = require("sequelize")

const User = sequlize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
});

User.sync({force: false});

module.exports = User;