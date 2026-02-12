const express = require('express');
const router = express.Router();
const { Executive } = require('../models');

// GET /executives
router.get('/executives', async (req, res) => {
  try {
    const users = await Executive.findAll();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message,
    });
  }
});



module.exports = router;