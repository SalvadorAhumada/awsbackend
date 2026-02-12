require('dotenv').config({ quiet: true });
const app = require('./app');
const db = require('./models');

async function startServer() {
  try {
    await db.sequelize.authenticate();
    console.log('\x1b[37m\x1b[44m%s\x1b[0m','[ 🔌 Database connected 🔌 ]');
    await db.sequelize.sync(); // dev only
    app.listen(3000, () => {
      console.log('\x1b[37m\x1b[44m%s\x1b[0m','[ Server 🏃 on port 3000 ]');
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();