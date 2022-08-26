const ratingValidation = (req, res, next) => {
  const { rating } = req.body.description;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ message: '\'Rating\' field must be an integer between 1 and 5' });
  }
  next();
};

module.exports = ratingValidation;
