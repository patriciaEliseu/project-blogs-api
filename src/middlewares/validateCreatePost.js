// const { CategoryService } = require('../services');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  // console.log('reqbody', req.body);
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  // const categoryIdsBD = (await CategoryService.getAll()).map((elemento) => elemento.id);
  // // console.log('categoryIdsBD', categoryIdsBD, categoryIds);
  // const verifId = categoryIdsBD.every((id) => id === categoryIds);
  // // console.log('verifId', verifId === false);
  //  if (verifId === false) {
  //   return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  // }
      return next();
};
