const { Sequelize } = require('sequelize');

const useSSL = process.env.DB_SSL === 'true';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    dialectOptions: useSSL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
            ca: fs.readFileSync('../us-east-1-bundle.pem').toString(), 
          },
        }
      : {},
  }
);

module.exports = sequelize;