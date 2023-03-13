// const { UserService } = require("../services");

module.exports = (req, res, next) => {
  const { password } = req.body;
 
    const charactersPass = 6;
  if (password.length < charactersPass) {
      return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  } 
      return next();
};