const executiveService = require('../services/executive.service');

exports.getExecutives = async (_req, res) => {
  try {
    const users = await executiveService.getAllExecutives();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};