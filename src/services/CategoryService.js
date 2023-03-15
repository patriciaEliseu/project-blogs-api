const { Category } = require('../models');

const getAll = async () => Category.findAll({ order: ['id'] });

const categorieCreate = async (name) => {
  Category.create({ name });
};

module.exports = {
  categorieCreate,
  getAll,
};