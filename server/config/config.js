export default {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'stevenadams',
    database: process.env.DB_DATABASE || 'nbavizdemo',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || '3306',
    dialectOptions: {
      authPlugins: {
        mysql_native_password: () => () => {
          const password = process.env.DB_PASSWORD || 'stevenadams';
          return Buffer.from(`${password}\0`);
        },
      },
    },
  },
};
