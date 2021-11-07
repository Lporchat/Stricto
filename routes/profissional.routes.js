const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbprofissional');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbprofissional WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 
  let datas = {
      "Nome": req.body.Nome,
      "CPF": req.body.CPF,
      "registroConselho": req.body.registroConselho,
      "matricula": req.body.matricula,
      "CNS": req.body.CNS,
      "CBO": req.body.CBO,
      "dtNascimnento": req.body.dtNascimnento,
      "celular": req.body.celular,
      "email": req.body.email,
      "cargo": req.body.cargo,
      "senha": req.body.senha
  }
     try {
       let response = await db.query('INSERT INTO tbprofissional SET ?', [datas]);
       res.json(response[0]);
     } catch (error) {
         res.json({error: true, log: error});
    }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "Nome": req.body.Nome,
        "CPF": req.body.CPF,
        "registroConselho": req.body.registroConselho,
        "matricula": req.body.matricula,
        "CNS": req.body.CNS,
        "CBO": req.body.CBO,
        "dtNascimnento": req.body.dtNascimnento,
        "celular": req.body.celular,
        "email": req.body.email,
        "cargo": req.body.cargo,
        "senha": req.body.senha
    }
      try {
        let response = await db.query('UPDATE tbprofissional SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbprofissional WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router

