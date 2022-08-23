const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Study',
    status: 'Done',
  },
  {
    id: 2,
    description: 'Workout',
    status: 'To do',
  },
  {
    id: 3,
    description: 'Play games',
    status: 'To do',
  },
];

app.get('/', (req, res) => res.status(200).send('Welcome to my API!'));

app.get('/my-activities', (req, res) => res.status(200).json(activities));

app.get('/my-activities/:id', (req, res) => {
  const { id } = req.params;
  const task = activities.find((e) => e.id === Number(id));

  res.status(200).json({ activity: task.description });
});

app.get('/filter/my-activities', (req, res) => {
  const { status } = req.query;
  const activitiesF = activities.filter((e) => e.status === status);

  res.status(200).json(activitiesF);
});

module.exports = app;
