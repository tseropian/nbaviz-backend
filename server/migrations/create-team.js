'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      updatedAt: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING
      },
      conference: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teams');
  }
};