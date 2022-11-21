const express = require('express');

const router = express.Router();
const questionController = require('../controller/question.controller');

router.post('/create-question', async (req, res) => {
  const response = await questionController.createQuestion(res.body);
  res.status(200).json(response);
});

router.get('/question/:id', async (req, res) => {
  const response = await questionController.getQuestion(res.params.id);
  res.status(200).json(response);
});

router.patch('/update-question/:id', async (req, res) => {
  const response = await questionController.updateQuestion(res.params.id);
  res.status(200).json(response);
});

router.delete('delete-question/:id', async (req, res) => {
  const response = await questionController.deteleQuestion(req.params.id);
  res.status(200).json(response);
});

module.exports = router;
