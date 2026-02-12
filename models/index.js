
const sequelize = require('../config/db');
const Executive = require('./executives.model');

const db = {};
db.sequelize = sequelize;
db.Executive = Executive;

module.exports = db;