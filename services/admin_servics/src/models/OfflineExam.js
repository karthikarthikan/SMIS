// src/models/OfflineExam.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // adjust path if necessary

const OfflineExam = sequelize.define('OfflineExam', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  },
  section: {
    type: DataTypes.STRING,
    allowNull: true
  },
  examDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Physical room or hall number for the offline exam'
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: true
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: true
  },
  totalMarks: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  passMarks: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'offline_exams',
  timestamps: true
});

export default OfflineExam;
