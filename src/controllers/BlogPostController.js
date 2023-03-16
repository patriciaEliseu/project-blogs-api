const { BlogPostService } = require('../services');
require('dotenv/config');

const getAll = async (_req, res) => {
const body = await BlogPostService.getAll();
  return res.status(200).json(body);
};

module.exports = { 
   getAll,
};
