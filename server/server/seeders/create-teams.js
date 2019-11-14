"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Teams",
      [
        {city: 'Atlanta', name: 'Hawks', key: 'ATL', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Brooklyn', name: 'Nets', key: 'BKN', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Boston', name: 'Celtics', key: 'BOS', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Charlotte', name: 'Hornets', key: 'CHA', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Chicago', name: 'Bulls', key: 'CHI', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Cleveland', name: 'Cavaliers', key: 'CLE', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Detroit', name: 'Pistons', key: 'DET', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Indiana', name: 'Pacers', key: 'IND', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Miami', name: 'Heat', key: 'MIA', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Milwaukee', name: 'Bucks', key: 'MIL', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Mew York', name: 'Knicks', key: 'NYK', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Orlando', name: 'Magic', key: 'ORL', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Philadelphia', name: '76ers', key: 'PHI', conference: 'E', createdAt: new Date(), updatedAt: new Date() },        
        {city: 'Toronto', name: 'Raptors', key: 'TOR', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Washington', name: 'Wizards', key: 'WAS', conference: 'E', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Dallas', name: 'Mavericks', key: 'DAL', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Denver', name: 'Nuggets', key: 'DEN', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Golden State', name: 'Warriors', key: 'GSW', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Houston', name: 'Rockets', key: 'HOU', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Los Angeles', name: 'Clippers', key: 'LAC', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Los Angeles', name: 'Laker', key: 'LAL', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Memphis', name: 'Grizzlies', key: 'MEM', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Minnesota', name: 'Timberwolves', key: 'MIN', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'New Orleans', name: 'Pelicans', key: 'NOP', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Oklahoma City',  name: 'Thunder', key: 'OKC', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Phoenix',  name: 'Suns', key: 'PHO', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Portland',  name: 'Trail Blazers', key: 'PTB', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Sacramento',  name: 'Kings', key: 'SAC', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'San Antonio',  name: 'Spurs', key: 'SAS', conference: 'W', createdAt: new Date(), updatedAt: new Date() },
        {city: 'Utah',  name: 'Jazz', key: 'UTA', conference: 'W', createdAt: new Date(), updatedAt: new Date() },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  }
};
