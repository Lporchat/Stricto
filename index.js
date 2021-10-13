const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

const profissional = require('./routes/profissional.routes');
const ubs = require('./routes/ubs.routes');

app.use(morgan("dev"));
app.use(bodyParser.json())

app.use('/profissional', profissional);
app.use('/ubs', ubs);









app.listen(process.env.PORT || 3000, () => {
    console.log('servidor rodando');
});