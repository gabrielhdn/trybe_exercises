const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Field \'name\' is required.' });
  }
  if (name.length <= 4) {
    return res.status(400).json({ message: 'Field \'name\' must have at least 4 characters.' });
  }
  next();
};

module.exports = nameValidation;
