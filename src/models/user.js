const sequlize = require("../db/connection");
const {
    DataTypes
} = require("sequelize");
const Post = require("./post")

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

User.hasOne(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User);

module.exports = User;