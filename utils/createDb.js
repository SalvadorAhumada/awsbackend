require('dotenv').config({ quiet: true });
const { Client } = require('pg');

const dbName = process.argv[2];

if(!dbName) {
    console.log('\x1b[37m\x1b[41m%s\x1b[0m', '❌ Falta nombre para DB');
    console.log('\x1b[37m\x1b[41m%s\x1b[0m', 'Ejemplo: "npm run create miBaseDeDatos"')
    return;
}

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

async function createDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
    // Check if the database exists
    const check = await client.query(
      `SELECT 1 FROM pg_database WHERE datname='${dbName}'`
    );
    if (check.rowCount === 0) {
      await client.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database '${dbName}' created successfully!`);
    } else {
      console.log(`Database '${dbName}' already exists.`);
    }
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await client.end();
  }
}

createDatabase();