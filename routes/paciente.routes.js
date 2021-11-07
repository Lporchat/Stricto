const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbpacientes');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbpacientes WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 
  let datas = {
      "CPF": req.body.CPF,
      "csus": req.body.csus,
      "dtNasc": req.body.dtNasc,
      "genero": req.body.genero,
      "nomeMae": req.body.nomeMae,
      "contato": req.body.contato,
      "ocupacao": req.body.ocupacao,
      "logradouro": req.body.logradouro,
      "numero": req.body.numero,
      "bairro": req.body.bairro,
      "cidade": req.body.cidade,
      "uf": req.body.uf,
      "cep": req.body.cep,
      "zona": req.body.zona,
  }
     try {
       let response = await db.query('INSERT INTO tbpacientes SET ?', [datas]);
       res.json(response[0]);
     } catch (error) {
         res.json({error: true, log: error});
    }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "CPF": req.body.CPF,
        "csus": req.body.csus,
        "dtNasc": req.body.dtNasc,
        "genero": req.body.genero,
        "nomeMae": req.body.nomeMae,
        "contato": req.body.contato,
        "ocupacao": req.body.ocupacao,
        "logradouro": req.body.logradouro,
        "numero": req.body.numero,
        "bairro": req.body.bairro,
        "cidade": req.body.cidade,
        "uf": req.body.uf,
        "cep": req.body.cep,
        "zona": req.body.zona,
    }
      try {
        let response = await db.query('UPDATE tbpacientes SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbpacientes WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router

