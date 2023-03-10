const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretJWT';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30min',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

module.exports = {
  createToken,
};