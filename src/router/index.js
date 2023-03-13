const express = require('express');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', validateDisplayName, validateEmail, validatePassword, userRouter);

module.exports = router;