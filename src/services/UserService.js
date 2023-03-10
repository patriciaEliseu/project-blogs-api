const bcrypt = require('bcrypt');
const { User } = require('../models');

const createUserWithBcrypt = ({ email, password }) => {
  const salt = bcrypt.genSaltSync(5);
  const passwordHash = bcrypt.hashSync(password, salt);
  return User.create({ email, password: passwordHash });
};

const loginCreate = (email, password) => User.findOne({ where: { email, password } });

module.exports = {
  createUserWithBcrypt,
  loginCreate,
};