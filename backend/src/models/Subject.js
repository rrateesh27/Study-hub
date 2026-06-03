const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  color: String,
  totalHours: {
    type: Number,
    default: 0
  },
  readCount: {
    type: Number,
    default: 0
  },
  grade: {
    type: String,
    default: 'N/A'
  },
  topics: [{
    name: String,
    completed: {
      type: Boolean,
      default: false
    },
    aiRating: {
      score: Number,
      feedback: String,
      checkedAt: Date
    },
    completedAt: Date
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subject', subjectSchema);