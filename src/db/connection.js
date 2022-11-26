const {
  Sequelize
} = require('sequelize');

const sequelize = new Sequelize('graphql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  sync: true
});

module.exports = sequelize;