const difficultyValidation = (req, res, next) => {
  const { difficulty } = req.body.description;

  const difficulties = {
    Easy: 'easy',
    Medium: 'medium',
    Difficult: 'difficult',
  };

  if (difficulty in difficulties === false) {
    return res.status(400).json({ message: '\'Difficulty\' must be Easy, Medium or Difficult' });
  }

  next();
};

module.exports = difficultyValidation;
