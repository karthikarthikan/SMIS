// src/models/User.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // adjust path if needed

const Admins = sequelize.define('Admins', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
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
  accountStatus: {
    type: DataTypes.ENUM('active', 'inactive', 'pending', 'banned'),
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  tableName: 'users',
  timestamps: true // handles createdAt and updatedAt automatically
});

export default Admins;
