const express = require('express');
const router = express.Router();
const mesaController = require('../controller/mesaController');

router.get('/', mesaController.getAllMesa);

router.post('/', mesaController.createMesa);

router.get('/:id', mesaController.getMesaById);

router.put('/:id', mesaController.updateMesa);

router.delete('/:id', mesaController.deleteMesa);


module.exports = router;