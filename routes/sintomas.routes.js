const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Buscar todas
router.get('/', async (req, res) => { 
    try {
      let response = await db.query('SELECT * FROM tbsinaissintomas');
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Buscar por ID
router.get('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('SELECT * FROM tbsinaissintomas WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});

// Criar // perguntar sobre isso se caso a pessoa tenha mais de uma 
router.post('/', async (req, res) => { 
  let datas = {
      "tosseSeca": req.body.tosseSeca,
      "febre": req.body.febre,
      "cansaco": req.body.cansaco,
      "perdapaladar": req.body.perdapaladar,
      "perdaolfato": req.body.perdaolfato,
      "dores": req.body.dores,
      "odinografia": req.body.odinografia,
      "conjuntivite": req.body.conjuntivite,
      "cefaleia": req.body.cefaleia,
      "erupcaoCutanea": req.body.erupcaoCutanea,
      "dorPeito": req.body.dorPeito,
      "auscultaPulmonar": req.body.auscultaPulmonar,
      "radiografiaPulmao": req.body.radiografiaPulmao,
      "desconfortoResp": req.body.desconfortoResp,
      "Pneumonia": req.body.Pneumonia,
      "PioraCondClin": req.body.PioraCondClin,
      "hipotensao": req.body.hipotensao,
      "linfoenia": req.body.linfoenia,
      "spo2": req.body.spo2,
      "outrosSintomas": req.body.outrosSintomas,
      "dataInicioSintomas": req.body.dataInicioSintomas,
      "tbPacientes_id": req.body.tbPacientes_id,
  }
    try {
      let response = await db.query('INSERT INTO tbsinaissintomas SET ?', [datas]);
      res.json(response[0]);
    } catch (error) {
        res.json({error: true, log: error});
   }
});

// Atualizar
router.put('/:id', async (req, res) => { 
    const id =  req.params.id;
    let datas = {
        "tosseSeca": req.body.tosseSeca,
        "febre": req.body.febre,
        "cansaco": req.body.cansaco,
        "perdapaladar": req.body.perdapaladar,
        "perdaolfato": req.body.perdaolfato,
        "dores": req.body.dores,
        "odinografia": req.body.odinografia,
        "conjuntivite": req.body.conjuntivite,
        "cefaleia": req.body.cefaleia,
        "erupcaoCutanea": req.body.erupcaoCutanea,
        "dorPeito": req.body.dorPeito,
        "auscultaPulmonar": req.body.auscultaPulmonar,
        "radiografiaPulmao": req.body.radiografiaPulmao,
        "desconfortoResp": req.body.desconfortoResp,
        "Pneumonia": req.body.Pneumonia,
        "PioraCondClin": req.body.PioraCondClin,
        "hipotensao": req.body.hipotensao,
        "linfoenia": req.body.linfoenia,
        "spo2": req.body.spo2,
        "outrosSintomas": req.body.outrosSintomas,
        "dataInicioSintomas": req.body.dataInicioSintomas,
    }
      try {
        let response = await db.query('UPDATE tbsinaissintomas SET ? WHERE id = ?', [datas, id]);
        res.json(response[0]);
      } catch (error) {
          res.json({error: true, log: error});
     }
});

// Deletar
router.delete('/:id', async (req, res) => { 
  const id =  req.params.id;
  try {
    let response = await db.query('DELETE FROM tbsinaissintomas WHERE id = ?',[id]);
    res.json(response[0]);
  } catch (error) {
      res.json({error: true, log: error});
 }
});
//falar com jan para ver se ele impediu de deletar

module.exports = router





//dignostico encerramento