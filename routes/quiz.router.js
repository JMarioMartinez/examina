const express = require('express');

const router = express.Router();

const quizController = require('../controller/quiz.controller');

// rutas

router.post('/create-quiz', async (req, res) => {
  const response = await quizController.createQuiz(res.body);
  res.status(200).json(response);
});

router.get('/quiz/:id', async (req, res) => {
  const response = await quizController.getQuiz(res.params.id);
  res.status(200).json(response);
});

router.patch('/update-quiz/:id', async (req, res) => {
  const response = await quizController.updateQuiz(res.params.id);
  res.status(200).json(response);
});

router.delete('delete-quiz/:id', async (req, res) => {
  const response = await quizController.deteleQuiz(req.params.id);
  res.status(200).json(response);
});
module.exports = router;
