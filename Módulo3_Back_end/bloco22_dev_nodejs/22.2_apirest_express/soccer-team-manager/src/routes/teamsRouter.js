const express = require('express');
const teams = require('../utils/teams');
const existingId = require('../middlewares/existingId');
const apiCredentials = require('../middlewares/apiCredentials');

const router = express.Router();
let nextId = 4;

router.get('/', (req, res) => res.status(200).json(teams));

router.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const selectedTeam = teams.find((e) => e.id === Number(id));

  res.status(200).json(selectedTeam);
});

router.post('/', (req, res) => {
  const { initials } = req.body;
  const authTeams = req.teams.teams;

  if (!authTeams.includes(initials) && teams.every((t) => t.initials !== initials)) {
    return res.sendStatus(401);
  }

  const newTeam = { id: nextId, ...req.body };
  teams.push(newTeam);
  nextId += 1;

  res.status(201).json(newTeam);
});

router.put('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];

    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;
    }
  }

  res.status(200).json(updatedTeam);
});

router.delete('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const teamIndex = teams.findIndex((e) => e.id === Number(id));
  teams.splice(teamIndex, 1);

  res.status(200).end();
});

module.exports = router;
