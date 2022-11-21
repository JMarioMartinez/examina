const questionModel = require('../models/questionsModel');

async function createQuestion(data) {
  // eslint-disable-next-line new-cap
  const question = new questionModel(data);
  try {
    const response = await question.save();
    return response;
  } catch (error) {
    return error;
  }
}

async function getQuestion(data) {
  try {
    const response = await questionModel.findById(data.id);
    return response;
  } catch (error) {
    return error;
  }
}

async function updateQuestion(data) {
  try {
    const response = await questionModel.findByIdAndUpdate(data.id, data, { new: true });
    return response;
  } catch (error) {
    return error;
  }
}

async function deteleQuestion(data) {
  try {
    const response = await questionModel.findByIdAndDelete(data.id);
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {
  deteleQuestion, createQuestion, getQuestion, updateQuestion,
};
