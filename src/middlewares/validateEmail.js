const { UserService } = require('../services');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/ig.test(email)) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }
  const emailBD = await UserService.loginPursuit(email); 
  // const emailExist = emailBD.dataValues;
  // console.log('emailExist', emailExist);
  if (emailBD) {
    return res.status(409)
    .json({ message: 'User already registered' });
  }
   
      return next();
};