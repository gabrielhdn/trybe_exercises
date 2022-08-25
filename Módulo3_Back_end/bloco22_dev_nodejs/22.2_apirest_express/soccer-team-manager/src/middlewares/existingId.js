const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;
  const hasTeam = teams.find((t) => t.id === Number(id));

  if (hasTeam) next();

  res.status(400).send('BAD REQUEST: ID not found in the database.');
};

module.exports = existingId;
