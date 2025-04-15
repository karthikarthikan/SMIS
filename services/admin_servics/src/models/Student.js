// src/models/Student.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // adjust path if necessary

const Student = sequelize.define('Student', {
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
  admissionNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: true
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  },
  section: {
    type: DataTypes.STRING,
    allowNull: true
  },
  rollNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // You can set up the association later, if needed
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bloodGroup: {
    type: DataTypes.ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    allowNull: true
  },
  admissionDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.literal('CURRENT_DATE')
  },
  additionalInfo: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Optional field for any extra notes or information about the student'
  },
  accountStatus: {
    type: DataTypes.ENUM('active', 'inactive', 'pending'),
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  tableName: 'students',
  timestamps: true
});

export default Student;
