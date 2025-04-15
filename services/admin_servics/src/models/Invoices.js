// src/models/Invoice.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Adjust the path as necessary

const Invoice = sequelize.define('Invoice', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  invoiceNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //   model: 'Students', // Make sure the Students table exists
    //   key: 'id',
    // },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  invoiceTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  paidAmount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending', // Default to "Pending"
  },
}, {
  tableName: 'Invoices',
  timestamps: true, // Automatically manage `createdAt` and `updatedAt`
});

export default Invoice;
