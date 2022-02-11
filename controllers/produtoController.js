const Produto = require("../models/Produtos");

class ProdutoController {
    static async pgProdutos(req, res){
        let query = {};
        const { nomeProduto } = req.query;

        if(nomeProduto){
            query = { name: { $regex: `^${nomeProduto}`, $options: "i"} };
        }
        
        if(!req._parsedUrl.search){
            query = {}
        }
        
        const produtos = await Produto.find(query).lean();
        res.render("produtos", {produtos, nomeProduto})
    }
    static async pgAddProduto(req, res){
        res.render("add_produto")
    }
    static async AddProduto(req, res){
        const { name, price, description, quantity } = req.body;
        const produto = Produto({ name, price, description, quantity });
        await produto.save();
        res.redirect('/produtos');
    }

    static async pgEditProduto(req, res){
        const {id} = req.params;
        const produto = await Produto.findById(id).lean();
        res.render('editar_produto', {produto});
    }

    static async editProduto(req, res){
        const {_id, name, price, description, quantity } = req.body;
        await Produto.findByIdAndUpdate(_id, {name, price, description, quantity});
        res.redirect('/produtos');
    }

    static async delProduto(req, res){
        const {_id} = req.body;
        await Produto.findByIdAndDelete(_id);
        res.redirect('/produtos');
    }
}

module.exports = ProdutoController;