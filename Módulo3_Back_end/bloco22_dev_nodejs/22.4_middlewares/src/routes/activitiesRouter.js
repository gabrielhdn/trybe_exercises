const express = require('express');
const createdAtValidation = require('../middlewares/createdAtValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const difficultyValidation = require('../middlewares/difficultyValidation');
const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const ratingValidation = require('../middlewares/ratingValidation');
const tokenAuth = require('../middlewares/auth');

const router = express.Router();

router.post('/',
  tokenAuth,
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  difficultyValidation,
 (_req, res) => {
  res.status(201).json({ message: 'Activity succesfully registered!' });
});

module.exports = router;
