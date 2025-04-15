// src/models/Class.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Adjust path if needed

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'Classes',
  timestamps: true,
});

export default Class;
