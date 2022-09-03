const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [ result ] = await peopleDB.insert(person);
    console.log(result); // result é um objeto com algumas chaves, incluindo insertId (com o id do novo elemento)
    res.status(201).json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [ result ] = await peopleDB.findAll();
    console.log(result); // result é um array de objetos (pessoas)
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ [ result ] ] = await peopleDB.findById(id);
    console.log(result); // result é um objeto (pessoa)
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [ result ] = await peopleDB.update(person, id); 
    console.log(result); // result é um objeto com algumas chaves, incluindo affectedRows
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ result ] = await peopleDB.remove(id);
    console.log(result); // result é um objeto com algumas chaves, incluindo affectedRows
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.sqlMessage });
  }
});

module.exports = router;
