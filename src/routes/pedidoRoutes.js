const express = require('express');
const router = express.Router();
const pedidoController = require('../controller/pedidoController');

router.get('/', pedidoController.getAllPedido);

router.post('/', pedidoController.createPedido);

router.get('/:id', pedidoController.getPedidoById);

router.put('/:id', pedidoController.updatePedido);

router.delete('/:id', pedidoController.deletePedido);


module.exports = router;