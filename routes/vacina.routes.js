const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbvacinacao');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbvacinacao WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 

    dataVacinacao
    vacinaCovid
    tipoVacina
    dose
    tbPacientes_id



  let datas = {
      "dataVacinacao": req.body.dataVacinacao,
      "vacinaCovid": req.body.vacinaCovid,
      "tipoVacina": req.body.tipoVacina,
      "dose": req.body.dose,
      "tbPacientes_id": req.body.tbPacientes_id,
  }
     try {
       let response = await db.query('INSERT INTO tbvacinacao SET ?', [datas]);
       res.json(response[0]);
     } catch (error) {
         res.json({error: true, log: error});
    }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "dataVacinacao": req.body.dataVacinacao,
        "vacinaCovid": req.body.vacinaCovid,
        "tipoVacina": req.body.tipoVacina,
        "dose": req.body.dose,
        "tbPacientes_id": req.body.tbPacientes_id,
    }
      try {
        let response = await db.query('UPDATE tbvacinacao SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbvacinacao WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router

