const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const teams = [];

    const buffer = fs.readFileSync('./seeders/teams.csv')
      .toString()
      .split('\r\n');

    buffer.forEach((row) => {
      const team = row.split(',');

      teams.push(
        {
          key: team[0],
          city: team[1],
          name: team[2],
          colour: team[3],
          startSeason: Number(team[4]),
          endSeason: Number(team[5]),
          conference: team[6],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      );
    });

    return queryInterface.bulkInsert('Teams', teams);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Teams', null, {}),
};
