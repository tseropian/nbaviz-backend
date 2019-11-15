'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rankings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      season: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      conference: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      wins: {
        type: Sequelize.INTEGER
      },
      losses: {
        type: Sequelize.INTEGER
      },
      gamesBehind: {
        type: Sequelize.INTEGER
      },
      psg: {
        type: Sequelize.FLOAT
      },
      pag: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Rankings');
  }
};