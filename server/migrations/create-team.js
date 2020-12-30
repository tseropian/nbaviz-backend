module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Teams', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    startSeason: {
      type: Sequelize.INTEGER,
    },
    endSeason: {
      type: Sequelize.INTEGER,
    },
    city: {
      type: Sequelize.STRING,
    },
    colour: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    key: {
      type: Sequelize.STRING,
    },
    conference: {
      type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Teams'),
};
