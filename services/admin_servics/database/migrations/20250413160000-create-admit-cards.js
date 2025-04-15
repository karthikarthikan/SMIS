'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admit_cards', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'students',
        //   key: 'id',
        // },
        onDelete: 'CASCADE',
      },
      examId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'offline_exams',
        //   key: 'id',
        // },
        onDelete: 'CASCADE',
      },
      rollNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      roomNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      issueDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_DATE'),
      },
      status: {
        type: Sequelize.ENUM('issued', 'revoked'),
        allowNull: false,
        defaultValue: 'issued',
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
    await queryInterface.dropTable('admit_cards');
  }
};
