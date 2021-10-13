const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => { 

    let datas = {
        "descricao": req.body.descricao,
        "Lougradouro": req.body.Lougradouro,
        "numero": req.body.numero,
        "bairro": req.body.bairro,
        "cidade": req.body.cidade,
        "uf": req.body.uf,
        "CEP": req.body.CEP,
    }
    console.log(datas);
    console.log(`essa parte e a descrição ${datas["numero"]}`);
      try {
        let response = await db.query('INSERT INTO tbubs SET ?', [datas]);
        res.json({error: false, response});
      } catch (error) {
          res.json({error: true, log: error});
     }


});

module.exports = router