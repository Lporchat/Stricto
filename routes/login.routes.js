const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Buscar por ID
router.get('/', async (req, res) => { 
 
    const email = req.body.email;
    const senha = req.body.senha;
    
  try {
    let response = await db.query('SELECT * FROM tbprofissional WHERE email = ? and senha = ? ORDER BY id DESC LIMIT 1',[email, senha]);
    if (response[0].length == 0){
        res.json("começo de um sonha, deu tudo errado");         
    }else{        
        res.json(response[0]);  
    }

  } catch (error) {
      res.json({error: true, log: error});
 }
});

module.exports = router

