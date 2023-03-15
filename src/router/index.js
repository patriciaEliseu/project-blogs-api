const express = require('express');

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoriesRouter = require('./categoriesRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);

module.exports = router;