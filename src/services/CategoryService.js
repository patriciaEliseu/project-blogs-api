const { Category } = require('../models');

const categorieCreate = async (name) => {
  Category.create({ name });
};

module.exports = {
  categorieCreate,
};