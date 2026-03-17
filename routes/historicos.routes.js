const express = require('express');
const router = express.Router();
const historicosController = require('../controllers/historicos.controller');

router.get('/historicos', historicosController.getHistoricos);
router.get('/nuevo', historicosController.getNuevo);
router.post('/nuevo', historicosController.postNuevo);
router.get('/:jugador_id/editar', historicosController.getEditar);
router.post('/editar', historicosController.postEditar);

module.exports = router;