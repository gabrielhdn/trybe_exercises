module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    res.status(401).json({ message: 'Invalid token!' });
  }

  next();
};
