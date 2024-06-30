const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, dob, email, password } = req.body;
    const user = new User({ name, dob, email, password });
    await user.save();
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid login credentials');
    }
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
