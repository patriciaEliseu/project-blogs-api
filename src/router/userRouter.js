const express = require('express');
const { UserController } = require('../controllers');
// const { validateUser } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/', /*  validateUser, */ UserController.createUser);

module.exports = router;