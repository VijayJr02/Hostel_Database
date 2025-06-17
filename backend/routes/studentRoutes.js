const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Add a new student
router.post('/add', async (req, res) => {
  const { name, age, room } = req.body;
  try {
    const newStudent = new Student({ name, age, room });
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
