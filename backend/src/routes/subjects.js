const express = require('express');
const router = express.Router();

// @route   GET /api/subjects/:studentId
// @desc    Get student subjects
// @access  Private
router.get('/:studentId', (req, res) => {
  try {
    res.json({ message: 'Get student subjects', studentId: req.params.studentId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/subjects
// @desc    Add new subject
// @access  Private
router.post('/', (req, res) => {
  try {
    res.json({ message: 'Subject added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;