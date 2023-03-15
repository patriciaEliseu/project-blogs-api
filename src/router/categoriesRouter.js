const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { CategoryController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, CategoryController.categorieCreate);

module.exports = router;