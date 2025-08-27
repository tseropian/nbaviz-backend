import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Import config as ES module
const configModule = await import(`${__dirname}/../config/config.js`);
const config = configModule.default[env];

const db = {};

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  config,
);
console.log('Database connected', sequelize.config);
const modelFiles = fs.readdirSync(__dirname)
  .filter((file) => (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  ));

for (const file of modelFiles) {
  const modelModule = await import(path.join(__dirname, file));
  const model = modelModule.default(sequelize, DataTypes);
  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
