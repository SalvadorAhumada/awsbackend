const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('Executive', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  type: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  miscData: {
    type: DataTypes.JSONB,
    allowNull: true
  }
}, {
  tableName: 'executives',
  timestamps: true
});

module.exports = User;