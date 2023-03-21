// const { NOW } = require('sequelize/types');
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

const updatePost = async ({ id, title, content }) => {
  console.log('idServ', id, title, content);
  await BlogPost.update({ title, content }, { where: { id } });
console.log('heloo');
  const newUpdate2 = await BlogPost.findOne({ where: { id }, 
    include: [
      { model: User, as: 'user', atrributes: { exclude: 'password' } },
      { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
      // console.log('newUpdateServ', newUpdate);
      return newUpdate2;
};

module.exports = {
  getAll,
  getById,
  updatePost,
};