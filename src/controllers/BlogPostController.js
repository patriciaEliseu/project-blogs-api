const { BlogPostService, UserService } = require('../services');

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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { userId } = req.user.data;

  const user = await UserService.getByUserId(id);
  // console.log('USERID', user.id);
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
  await BlogPostService.delBlogPost(id);
  res.status(204).send();
};

module.exports = { 
   getAll,
   getById,
   updatePost,
   delBlogPost,
};
