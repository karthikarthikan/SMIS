// src/models/Librarian.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Make sure this points to your Sequelize instance

const Librarian = sequelize.define('Librarian', {
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
  tableName: 'librarians',
  timestamps: true // createdAt and updatedAt will be handled automatically
});

export default Librarian;
