const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.get('/', clienteController.getAllCliente);

router.post('/', clienteController.createCliente);

router.get('/:id', clienteController.getClienteById);

router.put('/:id', clienteController.updateCliente);

module.exports = router;