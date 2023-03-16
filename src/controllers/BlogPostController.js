const { BlogPostService } = require('../services');
require('dotenv/config');

const getAll = async (_req, res) => {
const body = await BlogPostService.getAll();
  return res.status(200).json(body);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const bodyId = await BlogPostService.getById(id);
  if (!bodyId) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(bodyId);
};

module.exports = { 
   getAll,
   getById,
};
