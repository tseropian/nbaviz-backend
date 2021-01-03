const fs = require('fs');

const buildDate = (dateString) => {
  const dateParts = dateString.split('/');
  return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seasons = [];

    const buffer = fs.readFileSync('./seeders/seasons.csv')
      .toString()
      .split('\r\n');

    buffer.forEach((row) => {
      // console.log(row);
      const season = row.split(',');

      seasons.push(
        {
          year: Number(season[0]),
          startDate: buildDate(season[1]),
          endDate: buildDate(season[2]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      );
    });

    console.log(seasons);
    return queryInterface.bulkInsert('Seasons', seasons);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Seasons', null, {}),
};
