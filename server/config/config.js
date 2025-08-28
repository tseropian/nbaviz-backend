export default {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'stevenadams',
    database: process.env.DB_DATABASE || 'nbavizdemo',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || '3306',
    dialectOptions: {
      authPlugin: 'mysql_native_password',
      connectTimeout: 60000,
      acquireTimeout: 60000,
      timeout: 60000,
      ssl: false,
      insecureAuth: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'stevenadams',
    database: process.env.DB_DATABASE || 'nbavizdemo',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || '3306',
    dialectOptions: {
      authPlugin: 'mysql_native_password',
      connectTimeout: 60000,
      acquireTimeout: 60000,
      timeout: 60000,
      ssl: false,
      insecureAuth: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
