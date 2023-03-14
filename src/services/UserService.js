// const bcrypt = require('bcrypt');
const { User } = require('../models');

// createUserWithBcrypt é para qdo criar usuario, ele cria password c/ bcrypt
// const createUserWithBcrypt = ({ email, password }) => {
//   const salt = bcrypt.genSaltSync(5);
//   const passwordHash = bcrypt.hashSync(password, salt);
//   return User.create({ email, password: passwordHash });
// };
// buscando usuario 
const loginPursuit = async (email) => User.findOne({ where: { email } });

const createUser = async ({ displayName, email, password, image }) =>
User.create({ displayName, email, password, image });
 
module.exports = {
  // createUserWithBcrypt,
  loginPursuit,
  createUser,
};