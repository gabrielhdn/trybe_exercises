const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'Clube Atlético Paranaense',
    initials: 'CAP',
  },
  {
    id: 2,
    name: 'Futbol Club Barcelona',
    initials: 'FCB',
  },
];

app.get('/', (req, res) => res.status(200).json({ message: 'Hello, World!' }));

app.get('/teams', (req, res) => res.status(200).json(teams));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const selectedTeam = teams.find((e) => e.id === Number(id));

  res.status(200).json({ team: selectedTeam.name });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
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

  res.status(200).json({ updatedTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const teamIndex = teams.findIndex((e) => e.id === Number(id));
  teams.splice(teamIndex, 1);

  res.status(200).end();
});

module.exports = app;
