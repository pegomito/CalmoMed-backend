const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');

const OccupancyReport = sequelize.define('occupancy_reports', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  posto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  people_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_location: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  distance_to_posto: {
    type: DataTypes.DECIMAL(10,6),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

module.exports = OccupancyReport;
