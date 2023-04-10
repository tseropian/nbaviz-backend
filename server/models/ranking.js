export default (sequelize, DataTypes) => {
  const Ranking = sequelize.define('Ranking', {
    season: DataTypes.INTEGER,
    date: DataTypes.DATE,
    conference: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.INTEGER,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    gamesBehind: DataTypes.INTEGER,
    psg: DataTypes.FLOAT,
    pag: DataTypes.FLOAT,
  }, {});
  return Ranking;
};
