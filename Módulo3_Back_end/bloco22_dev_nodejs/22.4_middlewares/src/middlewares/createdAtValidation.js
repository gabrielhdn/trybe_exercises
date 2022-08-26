const createdAtValidation = (req, res, next) => {
  const { createdAt } = req.body.description;
  const dateFormat = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const isDateOk = dateFormat.test(createdAt);

  if (!isDateOk) {
    return res.status(400).json({ message: '\'createdAd\' field must have dd/mm/yy format.' });
  }
  next();
};

module.exports = createdAtValidation;
