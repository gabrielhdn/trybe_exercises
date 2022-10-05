const express = require('express');
const UserController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user/search/:id', UserController.getByIdAndEmail); // url para exemplo -> http://localhost:3001/user/search/1?email=leo@test.com
app.get('/user/:id', UserController.getById);
app.get('/user', UserController.getAll);
app.post('/user', UserController.createUser);
app.put('/user/:id', UserController.updateUser);
app.delete('/user/:id', UserController.deleteUser);

module.exports = app;