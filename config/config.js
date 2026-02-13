require('dotenv').config();

const useSSL = process.env.DB_SSL === 'true';

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: useSSL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
            ca: fs.readFileSync('../us-east-1-bundle.pem').toString(), 
          },
        }
      : {},
  },
};


