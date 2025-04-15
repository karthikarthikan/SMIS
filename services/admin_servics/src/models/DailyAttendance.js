// src/models/DailyAttendance.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Adjust path if needed
// import Student from './Student.js'; // Adjust path if needed
// import Classroom from './Classroom.js'; // Adjust path if needed

const DailyAttendance = sequelize.define('DailyAttendance', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'students', // Ensure this matches your student table name
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'classes', // Ensure this matches your class table name
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Format: YYYY-MM',
  },
  status: {
    type: DataTypes.ENUM('present', 'absent', 'late', 'leave'),
    allowNull: false,
    defaultValue: 'absent',
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'daily_attendance',
  timestamps: true,
});

// Associations (if required)
DailyAttendance.belongsTo(Student, {
  foreignKey: 'studentId',
  as: 'student', // alias for easier use
});

DailyAttendance.belongsTo(Classroom, {
  foreignKey: 'classId',
  as: 'classroom', // alias for easier use
});

export default DailyAttendance;
