const express = require('express');
const router = express.Router();

// @route   POST /api/calendar/sync
// @desc    Sync with Google Calendar
// @access  Private
router.post('/sync', (req, res) => {
  try {
    res.json({ message: 'Google Calendar synced successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/calendar/events/:studentId
// @desc    Get calendar events for student
// @access  Private
router.get('/events/:studentId', (req, res) => {
  try {
    res.json({ message: 'Get calendar events', studentId: req.params.studentId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;