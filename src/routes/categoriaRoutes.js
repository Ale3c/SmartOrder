const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoriaController');

router.get('/', categoriaController.getAllCategoria);

router.post('/', categoriaController.createCategoria);

router.get('/:id', categoriaController.getCategoriaById);

router.put('/:id', categoriaController.updateCategoria);

router.delete('/:id', categoriaController.deleteCategoria);


module.exports = router;