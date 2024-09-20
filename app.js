const express = require('express')
const app = express()
const clienteRouter = require('./src/routes/clienteRoutes')
const estabelecimentoRouter = require('./src/routes/estabelecimentoRoutes')
const cardapioRouter = require('./src/routes/cardapioRoutes')
const pedidoRouter = require('./src/routes/pedidoRoutes')
const categoriaRouter = require('./src/routes/categoriaRoutes')
const mesaRouter = require('./src/routes/mesaRoutes')
const produtoRouter = require('./src/routes/produtoRoutes')
const pedidoprodutoRouter = require('./src/routes/pedido-produtoRoutes')


app.use(express.json());

app.use('/clientes', clienteRouter);

app.use('/estabelecimento', estabelecimentoRouter);

app.use('/cardapio', cardapioRouter);

app.use('/pedido', pedidoRouter);

app.use('/categoria', categoriaRouter);

app.use('/mesa', mesaRouter);

app.use('/produto', produtoRouter);

app.use('/pedidoproduto', pedidoprodutoRouter);

app.use((err, req, res, next)=> {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});


module.exports = app