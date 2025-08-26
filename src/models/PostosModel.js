const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');

const Posto = sequelize.define('postos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  services: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  specialties: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: [],
  },
  rating: {
    type: DataTypes.DECIMAL,
    defaultValue: 0,
  },
  reviews: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  opening_hours: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  contact: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  crowding_info: {
    type: DataTypes.JSONB,
    defaultValue: {
      activeUsers: 0,
      lastUpdated: new Date().toISOString(),
      maxCapacity: 100,
      reportedQueue: 0,
      currentOccupancy: 0,
      occupancyPercentage: 0
    },
  },
  average_service_times: {
    type: DataTypes.JSONB,
    defaultValue: [],
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

module.exports = Posto;
