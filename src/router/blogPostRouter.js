const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { BlogPostController } = require('../controllers');
const validateCreatePost = require('../middlewares/validateCreatePost');

const router = express.Router();

router.get('/', validateJWT, BlogPostController.getAll);
router.get('/:id', validateJWT, BlogPostController.getById);
router.post('/', validateJWT, validateCreatePost, BlogPostController.createPost);
router.put('/:id', validateJWT, BlogPostController.updatePost);
router.delete('/:id', validateJWT, BlogPostController.delBlogPost);

module.exports = router;