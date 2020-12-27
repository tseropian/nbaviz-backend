'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ranking = sequelize.define('Ranking', {
    season: DataTypes.INTEGER,
    weekNb: DataTypes.INTEGER,
    date: DataTypes.DATE,
    conference: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.INTEGER,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    gamesBehind: DataTypes.INTEGER,
    psg: DataTypes.FLOAT,
    pag: DataTypes.FLOAT
  }, {});
  Ranking.associate = function(models) {
    // associations can be defined here
  };
  return Ranking;
};