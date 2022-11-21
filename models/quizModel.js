const mongoose = require('mongoose');

const quizSchema = mongoose.Schema(
  {
    quiz: {
      type: String,
      required: [Object],
    },
    answers: [Object],
    tags: [String],
    calification: true,
  },
  {
    timestamps: true,
  },
);

const quiz = mongoose.model('quizShema', quizSchema);
quiz.on('index', (err) => {
  if (err)console.error(err);
});

module.exports = quiz;
