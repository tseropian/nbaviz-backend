'use strict';
module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    year: DataTypes.INTEGER,
    weekNb: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.STRING
  }, {});
  Season.associate = function(models) {
    // associations can be defined here
  };
  return Season;
};