const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: true
  },
  description: String,
  notes: String,
  type: {
    type: String,
    enum: ['study', 'assignment', 'project', 'reading'],
    default: 'study'
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed'],
    default: 'pending'
  },
  scheduledDate: Date,
  completedDate: Date,
  duration: {
    type: Number,
    description: 'Duration in minutes'
  },
  aiAssessment: {
    isChecked: {
      type: Boolean,
      default: false
    },
    rating: String,
    score: Number,
    feedback: String,
    checkedAt: Date
  },
  googleCalendarEventId: String,
  attachments: [{
    url: String,
    filename: String,
    uploadedAt: Date
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

module.exports = mongoose.model('Activity', activitySchema);