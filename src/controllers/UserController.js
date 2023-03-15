const jwt = require('jsonwebtoken');
const { UserService } = require('../services');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secretJWT';
const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '7d',
};
const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  try {
  const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await UserService.loginPursuit(email);
      if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = jwt.sign({ data: { userId: userWithoutPassword.id } }, secret, JWT_CONFIG);
     res.status(200).json({ token });
  } catch (error) { 
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const getAll = async (req, res) => {
  try {
  const users = await UserService.getAll();
    if (!users) throw Error;
 
  return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const userId = await UserService.getByUserId(id);
  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userId);
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
 
    const newUser = await UserService.createUser({ displayName, email, password, image });
  // console.log('newUser', newUser);
  if (!newUser) return Error;
      const { password: _, ...userWithoutPassword } = newUser.dataValues;
  const token = jwt.sign({ data: { userId: userWithoutPassword.id } }, secret, JWT_CONFIG);
   return res.status(201).json({ token });
};

module.exports = { 
  login,
  createUser,
  getAll,
  getByUserId,
};