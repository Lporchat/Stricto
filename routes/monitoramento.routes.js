const express = require('express');
const router = express.Router();
const db = require('../config/db');

// dia
// data
// orientacoes
// evoluClinica
// tbUBS_id
// tbProfissional_id
// tbPacientes_id




// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbfichamonit');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbfichamonit WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 
  let datas = {
      "dia": req.body.dia,
      "data": req.body.data,
      "orientacoes": req.body.orientacoes,
      "evoluClinica": req.body.evoluClinica,
      "tbUBS_id": req.body.tbUBS_id,
      "tbProfissional_id": req.body.tbProfissional_id,
      "tbPacientes_id": req.body.tbPacientes_id,
  }
     try {
       let response = await db.query('INSERT INTO tbfichamonit SET ?', [datas]);
       res.json(response[0]);
     } catch (error) {
         res.json({error: true, log: error});
    }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "dia": req.body.dia,
        "data": req.body.data,
        "orientacoes": req.body.orientacoes,
        "evoluClinica": req.body.evoluClinica,
        "tbUBS_id": req.body.tbUBS_id,
        "tbProfissional_id": req.body.tbProfissional_id,
        "tbPacientes_id": req.body.tbPacientes_id,
    }
      try {
        let response = await db.query('UPDATE tbfichamonit SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbfichamonit WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router

