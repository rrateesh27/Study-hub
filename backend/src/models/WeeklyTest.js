const mongoose = require('mongoose');

const weeklyTestSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  week: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  focus: {
    type: String,
    description: 'Focus area - usually least studied topics'
  },
  questions: [{
    question: String,
    type: {
      type: String,
      enum: ['mcq', 'short', 'essay']
    },
    options: [String],
    correctAnswer: String,
    marks: Number
  }],
  totalMarks: Number,
  passingMarks: Number,
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'submitted', 'evaluated'],
    default: 'pending'
  },
  studentAnswers: [{
    questionId: mongoose.Schema.Types.ObjectId,
    answer: String,
    isCorrect: Boolean
  }],
  scoredMarks: Number,
  percentage: Number,
  feedback: String,
  submittedAt: Date,
  evaluatedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WeeklyTest', weeklyTestSchema);