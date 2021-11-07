const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbexposicaohosp');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbexposicaohosp WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 
  let datas = {
      "hospitalizado": req.body.hospitalizado,
      "dataInternacao": req.body.dataInternacao,
      "viagemBR": req.body.viagemBR,
      "BRdataIda": req.body.BRdataIda,
      "BRdataVolta": req.body.BRdataVolta,
      "viagemInternacional": req.body.viagemInternacional,
      "INTdataIda": req.body.INTdataIda,
      "INTdataVolta": req.body.INTdataVolta,
      "contatoIniSintomas": req.body.contatoIniSintomas,
      "fezcontato": req.body.fezcontato,
      "dataContato": req.body.dataContato,
      "eventoAglomerado": req.body.eventoAglomerado,
      "especifique": req.body.especifique,
      "contatoCasoPos": req.body.contatoCasoPos,
      "visitaSerSaude": req.body.visitaSerSaude,
      "tbPacientes_id": req.body.tbPacientes_id,
  }
     try {
       let response = await db.query('INSERT INTO tbexposicaohosp SET ?', [datas]);
       res.json(response[0]);
     } catch (error) {
         res.json({error: true, log: error});
    }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "hospitalizado": req.body.hospitalizado,
        "dataInternacao": req.body.dataInternacao,
        "viagemBR": req.body.viagemBR,
        "BRdataIda": req.body.BRdataIda,
        "BRdataVolta": req.body.BRdataVolta,
        "viagemInternacional": req.body.viagemInternacional,
        "INTdataIda": req.body.INTdataIda,
        "INTdataVolta": req.body.INTdataVolta,
        "contatoIniSintomas": req.body.contatoIniSintomas,
        "fezcontato": req.body.fezcontato,
        "dataContato": req.body.dataContato,
        "eventoAglomerado": req.body.eventoAglomerado,
        "especifique": req.body.especifique,
        "contatoCasoPos": req.body.contatoCasoPos,
        "visitaSerSaude": req.body.visitaSerSaude,
        "tbPacientes_id": req.body.tbPacientes_id,
    }
      try {
        let response = await db.query('UPDATE tbexposicaohosp SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbexposicaohosp WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router

