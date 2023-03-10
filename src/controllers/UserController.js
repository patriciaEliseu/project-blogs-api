// const bcrypt = require('bcrypt');

const { createToken } = require('../auth/authFunctions');
const { UserService } = require('../services');
require('dotenv/config');

const isBodyValid = (email, password) => email && password;

const loginCreate = async (req, res) => {
  try {
  const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await UserService.loginCreate(email, password);
    if (!user || !UserService.createUserWithBcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json({ message: 'erro interno' });
  }
};

module.exports = { 
  loginCreate,
};