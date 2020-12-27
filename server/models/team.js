'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    conference: DataTypes.STRING,
    color: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};