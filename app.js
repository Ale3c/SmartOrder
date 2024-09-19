const express = require('express')
const app = express()
const clienteRouter = require('./src/routes/clienteRoutes')
const estabelecimentoRouter = require('./src/routes/estabelecimentoRoutes')
const cardapioRouter = require('./src/routes/cardapioRoutes')


app.use(express.json());

app.use('/clientes', clienteRouter);

app.use('/estabelecimento', estabelecimentoRouter);

app.use('/cardapio', cardapioRouter);

app.use((err, req, res, next)=> {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});


module.exports = app