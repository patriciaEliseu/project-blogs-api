const { BlogPostService, UserService, CategoryService } = require('../services');

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

const createPost = async (req, res) => {
  try {
const { title, content, categoryIds } = req.body;
const { userId } = req.user.data;

const verifId = (await CategoryService.getAll())
.map((elemento) => elemento.id);
console.log('verifId', verifId);
const veriEvery = categoryIds.every((e) => verifId.includes(e));
console.log('v', veriEvery);
if (veriEvery === false) {
  return res.status(400).json({ message: 'one or more "categoryIds" not found' });
}

const newPost = await BlogPostService.createPost({ title, content, categoryIds, userId });
    
return res.status(201).json(newPost);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { userId } = req.user.data;

  const user = await UserService.getByUserId(id);
  if (userId !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
    
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const newUpdate = await BlogPostService.updatePost({ id, title, content });
   return res.status(200).json(newUpdate);
};

const delBlogPost = async (req, res) => {
  const { id } = req.body;
  const { userId } = req.user.data;

  const user = await UserService.getByUserId(id);
  console.log('userCont', user);
  if (userId !== user) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
 const del = await BlogPostService.delBlogPost(id);
 console.log('delCont', del);
  if (!del) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
    return res.status(204).json();
};

module.exports = { 
   getAll,
   getById,
   createPost,
   updatePost,
   delBlogPost,
  
};
