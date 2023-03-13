const express = require('express');
// const validateUser = require('./middlewares/validateUser');
const router = require('./router');
// const { userController } = require('./controllers');
// const validateLogin = require('./middlewares/validateLogin');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(router);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
