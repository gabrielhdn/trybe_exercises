const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const teamsRouter = require('./routes/teamsRouter');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/teams', teamsRouter);

app.get('/', (req, res) => res.status(200).json({ message: 'Hello, World!' }));

app.use((req, res) => res.status(404).send('Page not found!'));

module.exports = app;
