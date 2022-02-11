const { Router } = require('express');
const router = Router();
const ProdutoController = require("../controllers/produtoController");

router.get('/produtos', ProdutoController.pgProdutos);
router.get('/produtos/novo', ProdutoController.pgAddProduto);
router.get('/produtos/editar/:id', ProdutoController.pgEditProduto);
router.post('/produtos/atualizar', ProdutoController.editProduto);
router.post('/produtos/enviar', ProdutoController.AddProduto);
router.post('/produtos/deletar', ProdutoController.delProduto);

module.exports = router;