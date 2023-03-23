// const { NOW } = require('sequelize/types');
const { User, BlogPost, Category, PostCategory, sequelize } = require('../models');

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

const createPost = async ({ title, content, categoryIds, userId }) => {
  const result = await sequelize.transaction(async (t) => {
  const create = await BlogPost.create({ title, content, userId }, { transaction: t });
    await Promise.all(categoryIds.map((id) => PostCategory
    .create({ categoryId: id, postId: create.dataValues.id }, { transaction: t })));
     
  return create;
  });
  return result;  
};

const updatePost = async ({ id, title, content }) => {
    await BlogPost.update({ title, content }, { where: { id } });
  const newUpdate2 = await BlogPost.findOne({ where: { id }, 
    include: [
      { model: User, as: 'user', atrributes: { exclude: 'password' } },
      { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } }] });
     
      return newUpdate2;
};

const delBlogPost = async (id) => {
  // console.log('idServ', id);
  await BlogPost.findByPk(id);
 const del = await BlogPost.destroy({
   where: { id },
 });
 console.log('delServ', del);
  return del; 
};

module.exports = {
  getAll,
  getById,
  createPost,
  updatePost,
  delBlogPost,
};