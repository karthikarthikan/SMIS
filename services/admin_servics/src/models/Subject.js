// src/models/Subject.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Adjust the path as necessary

const Subject = sequelize.define('Subject', {
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
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Ensures that the subject code is unique
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'Subjects',
  timestamps: true,  // Automatically manage `createdAt` and `updatedAt`
});

export default Subject;
