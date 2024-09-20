const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoController');

router.get('/', produtoController.getAllProduto);

router.post('/', produtoController.createProduto);

router.get('/:id', produtoController.getProdutoById);

router.put('/:id', produtoController.updateProduto);

router.delete('/:id', produtoController.deleteProduto);


module.exports = router;