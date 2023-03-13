// const { UserService } = require("../services");

module.exports = (req, res, next) => {
  const { displayName } = req.body;
  const characters = 8;
  if (displayName.length < characters) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
      return next();
};