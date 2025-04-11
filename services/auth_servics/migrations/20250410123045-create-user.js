// src/migrations/20230410123045-create-user.js

'use strict';

module.exports = {
  // The 'up' method defines how to apply the migration (creating the table)
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      // 'id' column: auto-increment primary key
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,  // The column cannot be null
        autoIncrement: true,  // Automatically incrementing value
        primaryKey: true,  // This is the primary key
      },
      // 'username' column: must be a unique string and cannot be null
      username: {
        type: Sequelize.STRING,
        allowNull: false,  // The column cannot be null
        unique: true,  // Ensure that usernames are unique
      },
      // 'password' column: must be a string and cannot be null
      password: {
        type: Sequelize.STRING,
        allowNull: false,  // The column cannot be null
      },
      // 'role' column: must be a string and cannot be null
      role: {
        type: Sequelize.STRING,
        allowNull: false,  // The column cannot be null
      },
      // Optionally, you can add a 'createdAt' and 'updatedAt' column by using Sequelize's built-in timestamps:
      // createdAt: Sequelize.DATE,
      // updatedAt: Sequelize.DATE,
    });
  },

  // The 'down' method defines how to undo the migration (dropping the table)
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');  // Drop the 'users' table
  }
};
