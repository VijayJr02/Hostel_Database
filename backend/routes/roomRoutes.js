const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// Add a new room
router.post('/add', async (req, res) => {
  const { roomNumber, capacity } = req.body;
  try {
    const newRoom = new Room({ roomNumber, capacity });
    await newRoom.save();
    res.json(newRoom);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
