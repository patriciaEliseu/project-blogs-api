const jwt = require('jsonwebtoken');
const { UserService } = require('../services');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secretJWT';

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
    // const { password: _, ...userWithoutPassword } = user.dataValues; 
    const JWT_CONFIG = {
      algorithm: 'HS256',
      expiresIn: '7d',
    };
    
    const token = jwt.sign({ data: { userId: user.id } }, secret, JWT_CONFIG);

     res.status(200).json({ token });
  } catch (error) { 
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
 
    const newUser = await UserService.createUser({ displayName, email, password, image });
  console.log('newUser', newUser);
  if (!newUser) return Error;
  
    const JWT_CONFIG = {
    algorithm: 'HS256',
    expiresIn: '7d',
    };
  
  const token = jwt.sign({ data: { userId: newUser.id } }, secret, JWT_CONFIG);
   return res.status(201).json({ token });
};

module.exports = { 
  login,
  createUser,
};