const {
  Sequelize
} = require('sequelize');

const sequelize = new Sequelize('graphql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;