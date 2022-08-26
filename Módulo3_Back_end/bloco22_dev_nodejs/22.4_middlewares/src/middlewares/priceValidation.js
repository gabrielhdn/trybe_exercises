const priceValidation = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    return res.status(400).json({ message: 'Field \'price\' is required.' });
  }
  if (price < 0) {
    return res.status(400).json({ message: '\'Price\' must have a valid number.' });
  }
  next();
};

module.exports = priceValidation;
