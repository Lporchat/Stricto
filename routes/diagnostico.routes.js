const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbdignosticoencerramento');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbdignosticoencerramento WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 
  let datas = {
      "tipoAmostra": req.body.tipoAmostra,
      "tipoExame": req.body.tipoExame,
      "dataEncerramento": req.body.dataEncerramento,
      "confimaCovid": req.body.confimaCovid,
      "criterioEncerra": req.body.criterioEncerra,
      "situacaoSaude": req.body.situacaoSaude,
      "dataObito": req.body.dataObito,
      "tbPacientes_id": req.body.tbPacientes_id
  }
     try {
       let response = await db.query('INSERT INTO tbdignosticoencerramento SET ?', [datas]);
       res.json(response[0]);
     } catch (error) {
         res.json({error: true, log: error});
    }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "tipoAmostra": req.body.tipoAmostra,
        "tipoExame": req.body.tipoExame,
        "dataEncerramento": req.body.dataEncerramento,
        "confimaCovid": req.body.confimaCovid,
        "criterioEncerra": req.body.criterioEncerra,
        "situacaoSaude": req.body.situacaoSaude,
        "dataObito": req.body.dataObito,
        "tbPacientes_id": req.body.tbPacientes_id
    }
      try {
        let response = await db.query('UPDATE tbdignosticoencerramento SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbdignosticoencerramento WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router

