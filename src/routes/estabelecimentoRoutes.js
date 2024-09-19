const express = require('express');
const router = express.Router();
const estabelecimentoController = require('../controller/estabelecimentoController');

router.get('/', estabelecimentoController.getAllEstabelecimento);

router.post('/', estabelecimentoController.createEstabelecimento);

router.get('/:id', estabelecimentoController.getEstabelecimentoById);

router.put('/:id', estabelecimentoController.updateEstabelecimento);

router.delete('/:id', estabelecimentoController.deleteEstabelecimento);


module.exports = router;