const express  = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController')

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.adicionar);
router.put('/carro/:codigo', CarroController.alterar);
router.delete('/carro/:codigo', CarroController.remover)
module.exports = router;