const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { CategoryController } = require('../controllers');

const router = express.Router();
router.get('/', validateJWT, CategoryController.getAll);
router.post('/', validateJWT, CategoryController.categorieCreate);

module.exports = router;