// routes/userPersona.js

const express = require('express');
const router = express.Router();
const UserPersona= require('../db/UserPersona')

// POST /save-persona
router.post('/save-persona', async (req, res) => {
  try {
    const newPersona = new UserPersona(req.body);
    await newPersona.save();
    res.status(201).json({ message: 'User Persona saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save user persona' });
  }
});

// GET /fetch-persona
router.get('/fetch-persona', async (req, res) => {
  try {
    const personas = await UserPersona.find().sort({ _id: -1 }).limit(1); // Fetch the most recent persona
    res.status(200).json(personas[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user persona' });
  }
});

module.exports = router;
