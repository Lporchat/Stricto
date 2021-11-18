require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')


const app = express();

const profissional = require('./routes/profissional.routes');
const ubs = require('./routes/ubs.routes');
const sintomas = require('./routes/sintomas.routes');
const paciente = require('./routes/paciente.routes');
const diagnostico = require('./routes/diagnostico.routes');
const exposicao = require('./routes/exposicao.routes');
const monitoramento = require('./routes/monitoramento.routes');
const condicoes = require('./routes/condicoes.routes');
const vacina = require('./routes/vacina.routes');
const login = require('./routes/login.routes');

app.use(morgan("dev"));
app.use(bodyParser.json())

app.use('/profissional', profissional);
app.use('/ubs', ubs);
app.use('/sintomas', sintomas);
app.use('/paciente', paciente);
app.use('/diagnostico', diagnostico);
app.use('/exposicao', exposicao);
app.use('/monitoramento', monitoramento);
app.use('/condicoes', condicoes);
app.use('/vacina', vacina);
app.use('/login', login);









app.listen(process.env.PORT || 3000, () => {
    console.log('servidor rodando');
});