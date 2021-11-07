const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbubs');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbubs WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 
  let datas = {
      "descricao": req.body.descricao,
      "Lougradouro": req.body.Lougradouro,
      "numero": req.body.numero,
      "bairro": req.body.bairro,
      "cidade": req.body.cidade,
      "uf": req.body.uf,
      "CEP": req.body.CEP,
  }
    try {
      let response = await db.query('INSERT INTO tbubs SET ?', [datas]);
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "descricao": req.body.descricao,
        "Lougradouro": req.body.Lougradouro,
        "numero": req.body.numero,
        "bairro": req.body.bairro,
        "cidade": req.body.cidade,
        "uf": req.body.uf,
        "CEP": req.body.CEP,
    }
      try {
        let response = await db.query('UPDATE tbubs SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbubs WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router



