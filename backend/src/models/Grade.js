const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
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
  academicYear: {
    type: Number,
    required: true
  },
  semester: {
    type: String,
    enum: ['fall', 'spring'],
    required: true
  },
  overallGrade: {
    type: String,
    default: 'N/A'
  },
  gpa: {
    type: Number,
    min: 0,
    max: 4.0
  },
  assessmentScores: {
    aiAssessment: Number,
    weeklyTests: Number,
    attendance: Number,
    assignments: Number
  },
  breakdown: {
    aiAssessment: {
      type: Number,
      default: 30
    },
    weeklyTests: {
      type: Number,
      default: 40
    },
    attendance: {
      type: Number,
      default: 15
    },
    assignments: {
      type: Number,
      default: 15
    }
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Grade', gradeSchema);