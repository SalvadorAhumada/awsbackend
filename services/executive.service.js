const pool = require('../config/db');

exports.getAllExecutives = async () => {
  const result = await pool.query('SELECT * FROM executives');
  return result.rows;
};
