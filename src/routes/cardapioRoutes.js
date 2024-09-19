const express = require('express');
const router = express.Router();
const cardapioController = require('../controller/cardapioController');

router.get('/', cardapioController.getAllCardapio);

router.post('/', cardapioController.createCardapio);

router.get('/:id', cardapioController.getCardapioById);

router.put('/:id', cardapioController.updateCardapio);

router.delete('/:id', cardapioController.deleteCardapio);


module.exports = router;