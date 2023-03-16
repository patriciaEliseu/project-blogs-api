const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { BlogPostController } = require('../controllers');

const router = express.Router();
router.get('/', validateJWT, BlogPostController.getAll);
// router.post('/', validateJWT, BlogPostController.ieCreate);

module.exports = router;