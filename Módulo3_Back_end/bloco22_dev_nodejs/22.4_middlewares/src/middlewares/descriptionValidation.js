const validateItems = (key, res, value) => {
  if (!key) {
    return res.status(400).json({ message: `Field '${value}' is required.` });
  }
};

const descriptionValidation = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;

  return validateItems(description, res, 'description')
    || validateItems(createdAt, res, 'createdAt')
    || validateItems(rating, res, 'rating')
    || validateItems(difficulty, res, 'difficulty')
    || next();
};

module.exports = descriptionValidation;
