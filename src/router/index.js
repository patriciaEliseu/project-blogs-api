const express = require('express');

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;