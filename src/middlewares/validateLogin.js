module.exports = (req, res, next) => {
  const { email, password } = req.body;
  
  if ([email].includes(undefined)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if ([password].includes(undefined)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/ig.test(email)) {
    return res.status(400).json({ message: 'Invalid fields' });
  }  
      return next();
};