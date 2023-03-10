const express = require('express');
const { UserController } = require('../controllers');

const router = express.Router();

router.post('/', UserController.loginCreate);

module.exports = router;