const sequlize = require("../db/connection");
const {
    DataTypes
} = require("sequelize");
const User = require("./user");

const Post = sequlize.define("post", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Post.sync({force: false});

module.exports = Post;