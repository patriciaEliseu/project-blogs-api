const express = require('express');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateJWT = require('../auth/validateJWT');
const { UserController } = require('../controllers');

const router = express.Router();

router.get('/', validateJWT, UserController.getAll);
router.get('/:id', validateJWT, UserController.getByUserId);
router.post('/', validateDisplayName, validateEmail, validatePassword, UserController.createUser);

module.exports = router;