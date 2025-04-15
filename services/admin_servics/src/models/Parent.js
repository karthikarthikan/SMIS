// src/models/Parent.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // adjust path if necessary

const Parent = sequelize.define('Parent', {
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
    allowNull: true,
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
  relationship: {
    type: DataTypes.STRING,
    allowNull: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: true
    // If you have a Student model, you can set up the association separately
  },
  accountStatus: {
    type: DataTypes.ENUM('active', 'inactive', 'pending'),
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  tableName: 'parents',
  timestamps: true
});

export default Parent;
