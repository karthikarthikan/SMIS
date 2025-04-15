'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('daily_attendance', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'classes', // or 'classrooms' depending on your table
        //   key: 'id',
        // },
        onDelete: 'CASCADE',
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      month: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Format: YYYY-MM',
      },
      status: {
        type: Sequelize.ENUM('present', 'absent', 'late', 'leave'),
        allowNull: false,
        defaultValue: 'absent',
      },
      remarks: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('daily_attendance');
  }
};
