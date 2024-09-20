const express = require('express');
const router = express.Router();
const pedidoprodutoController = require('../controller/pedido-produtoController');

router.get('/', pedidoprodutoController.getAllPedidoProduto);

router.post('/', pedidoprodutoController.createPedidoProduto);

router.get('/:id', pedidoprodutoController.getPedidoProdutoById);

router.put('/:id', pedidoprodutoController.updatePedidoProduto);

router.delete('/:id', pedidoprodutoController.deletePedidoProduto);


module.exports = router;