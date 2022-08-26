const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(400).json({ message: 'Invalid fields!' });
  }
  const token = generateToken();
  res.status(201).json({ token });
});

module.exports = router;
