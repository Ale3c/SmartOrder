const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.get('/', clienteController.getAllClientes);

router.post('/', clienteController.createCliente);

module.exports = router;