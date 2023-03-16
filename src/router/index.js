const express = require('express');

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoriesRouter = require('./categoriesRouter');
const blogPostRouter = require('./blogPostRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', blogPostRouter);

module.exports = router;