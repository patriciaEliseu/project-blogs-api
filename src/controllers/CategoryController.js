const { CategoryService } = require('../services');
require('dotenv/config');

const categorieCreate = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const categoryId = CategoryService.categorieCreate(name);
  return res.status(201).json({ id: categoryId, name });
};

module.exports = { 
  categorieCreate,
};
