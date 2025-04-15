// src/models/Room.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Adjust path if needed

const Room = sequelize.define('Room', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Ensures that room numbers are unique
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,  // Can be "Lecture Hall", "Seminar Room", etc.
  },
}, {
  tableName: 'Rooms',
  timestamps: true,  // Automatically manage `createdAt` and `updatedAt`
});

export default Room;
