const quizModel = require('../models/quizModel');

async function createQuiz(data) {
  // eslint-disable-next-line new-cap
  const quiz = new quizModel(data);
  try {
    const response = await quiz.save();
    return response;
  } catch (error) {
    return error;
  }
}

async function getQuiz(data) {
  try {
    const response = await quizModel.findById(data.id);
    return response;
  } catch (error) {
    return error;
  }
}

async function updateQuiz(data) {
  try {
    const response = await quizModel.findByIdAndUpdate(data.id, data, { new: true });
    return response;
  } catch (error) {
    return error;
  }
}

async function deteleQuiz(data) {
  try {
    const response = await quizModel.findByIdAndDelete(data.id);
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {
  createQuiz, getQuiz, updateQuiz, deteleQuiz,
};
