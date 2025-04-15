// src/models/Teacher.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Adjust path if needed

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  accountStatus: {
    type: DataTypes.ENUM('active', 'inactive', 'pending'),
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  tableName: 'teachers',
  timestamps: true // Sequelize will handle createdAt and updatedAt
});

export default Teacher;
