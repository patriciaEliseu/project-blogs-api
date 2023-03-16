const { User, BlogPost, Category } = require('../models');

const getAll = async () => {
const BlogP = await BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
    return BlogP;
  };

const getById = async (id) => {
  const postId = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
    return postId;
  };

module.exports = {
  getAll,
  getById,
};