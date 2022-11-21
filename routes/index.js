const express = require('express');
const preguntasRouter = require('./preguntas.router');
const examenesRouter = require('./quiz.router');

function routerApi(app) {
  const router = express.Router();
  app.use('api/', router);
  app.use('/api/preguntas', preguntasRouter);
  app.use('/api/examenes', examenesRouter);
}

module.exports = routerApi;
