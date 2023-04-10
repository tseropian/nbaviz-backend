export default {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_DATABASE || 'nbavizdemo',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
  port: process.env.DB_PORT || '3306',
};
