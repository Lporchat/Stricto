



const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbfichacondicoespreexistente');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbfichacondicoespreexistente WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar
router.post('/', async (req, res) => { 

// obsedidade
// neoplasia
// diabetes
// HIV
// imunodeficiencia
// cardiopatia
// pneumopatia
// hepatite
// doencaRenal
// doencaNeurologica
// gravidez
// condicoesPreExiste
// tbFichaPacientecol
// 



  let datas = {
      "obsedidade": req.body.obsedidade,
      "neoplasia": req.body.neoplasia,
      "diabetes": req.body.diabetes,
      "HIV": req.body.HIV,
      "imunodeficiencia": req.body.imunodeficiencia,
      "cardiopatia": req.body.cardiopatia,
      "pneumopatia": req.body.pneumopatia,
      "hepatite": req.body.hepatite,
      "doencaRenal": req.body.doencaRenal,
      "doencaNeurologica": req.body.doencaNeurologica,
      "gravidez": req.body.gravidez,
      "condicoesPreExiste": req.body.condicoesPreExiste,
      "tbFichaPacientecol": req.body.tbFichaPacientecol,
      "tbPacientes_id": req.body.tbPacientes_id
  }
     try {
       let response = await db.query('INSERT INTO tbfichacondicoespreexistente SET ?', [datas]);
       res.json(response[0]);
     } catch (error) {
         res.json({error: true, log: error});
    }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "obsedidade": req.body.obsedidade,
        "neoplasia": req.body.neoplasia,
        "diabetes": req.body.diabetes,
        "HIV": req.body.HIV,
        "imunodeficiencia": req.body.imunodeficiencia,
        "cardiopatia": req.body.cardiopatia,
        "pneumopatia": req.body.pneumopatia,
        "hepatite": req.body.hepatite,
        "doencaRenal": req.body.doencaRenal,
        "doencaNeurologica": req.body.doencaNeurologica,
        "gravidez": req.body.gravidez,
        "condicoesPreExiste": req.body.condicoesPreExiste,
        "tbFichaPacientecol": req.body.tbFichaPacientecol,
        "tbPacientes_id": req.body.tbPacientes_id
    }
      try {
        let response = await db.query('UPDATE tbfichacondicoespreexistente SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbfichacondicoespreexistente WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router

