export default (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    year: DataTypes.INTEGER,
    weekNb: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.STRING,
  }, {});

  return Season;
};
