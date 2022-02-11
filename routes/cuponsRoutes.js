const { Router } = require('express');
const CupomController = require('../controllers/CupomController');

const router = Router();

router.get('/cupons', CupomController.paginaCupons);
router.get('/cupons/novo', CupomController.paginaAdicionarCupom);
router.post('/cupons/enviar', CupomController.addCupom);

module.exports = router;