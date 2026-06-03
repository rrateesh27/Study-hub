const express = require('express');
const router = express.Router();

// @route   GET /api/students/:id
// @desc    Get student profile
// @access  Private
router.get('/:id', (req, res) => {
  try {
    res.json({ message: 'Get student profile', studentId: req.params.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   PUT /api/students/:id
// @desc    Update student profile
// @access  Private
router.put('/:id', (req, res) => {
  try {
    res.json({ message: 'Student profile updated', studentId: req.params.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;