const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'user',
    validate: {
      isIn: [['user', 'admin']],
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

module.exports = User;
