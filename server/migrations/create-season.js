module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Seasons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    weekNb: {
      type: Sequelize.INTEGER,
    },
    startDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    endDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Seasons'),
};
