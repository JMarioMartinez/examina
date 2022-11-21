const mongoose = require('mongoose');

const questionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'This option is obligatory'],
    },
    answers: [Object],
    tags: [String],
  },
  {
    timestamps: true,
  },
);

const questions = mongoose.model('questionShema', questionSchema);
questions.on('index', (err) => {
  if (err)console.error(err);
});

module.exports = questions;
