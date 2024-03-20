const express = require('express');
const router = express.Router();

let bandasController = require('../controllers/bandasController')

router.get('/', bandasController.index)
router.get('/detalle/:id', bandasController.show)
router.get('/genero/:genero', bandasController.genero)

module.exports = router;
