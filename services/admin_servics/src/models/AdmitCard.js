// src/models/AdmitCard.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Adjust path if needed
// import Student from './Student.js'; // Adjust path if needed
// import OfflineExam from './OfflineExam.js'; // Adjust path if needed

const AdmitCard = sequelize.define('AdmitCard', {
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
  examId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'offline_exams', // Ensure this matches your exam table name
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  rollNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  issueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.literal('CURRENT_DATE'),
  },
  status: {
    type: DataTypes.ENUM('issued', 'revoked'),
    allowNull: false,
    defaultValue: 'issued',
  },
}, {
  tableName: 'admit_cards',
  timestamps: true,
});

// Associations (if required)
AdmitCard.belongsTo(Student, {
  foreignKey: 'studentId',
  as: 'student', // alias for easier use
});

AdmitCard.belongsTo(OfflineExam, {
  foreignKey: 'examId',
  as: 'exam', // alias for easier use
});

export default AdmitCard;
