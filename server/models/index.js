import dotenv from 'dotenv';
import Sequelize from 'sequelize';

import config from '../config/config.js';
import Ranking from './ranking.js';
import Season from './season.js';
import Team from './team.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  config,
);
console.log(Season);
const db = {
  Ranking,
  Season,
  Team,
  sequelize,
  Sequelize,
};

export default db;
