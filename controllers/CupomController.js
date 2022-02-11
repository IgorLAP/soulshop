const Cupons = require('./../models/Cupons');

class CupomController{
    static async paginaCupons(req, res){
        const cupons = await Cupons.find().lean();
        res.render("cupons", {cupons});
    }
    static async paginaAdicionarCupom(req, res){
        res.render("add_cupom");
    }
    static async addCupom(req, res){
        const {title, code, category, expDate } = req.body;
        const cupom = Cupons({ title, code, category, expDate });
        await cupom.save();

        res.redirect("/cupons");
    }
    //Renderiza página para editar cupom especificado pelo id
    static async paginaEditCupom(req, res) {
        const { id } = req.params;
        const cupom = await Cupom.findById(id).lean();

        res.render("editar_cupom", { cupom });
    }
    //Atualiza informações do cupom especificado pelo id
    static async editCupom(req, res) {
        const { id, title, category, expDate } = req.body;
        
        await Cupom.findByIdAndUpdate(id, { title, category, expDate });

        res.redirect("/cupons");
    }
    //Deleta cupom pelo id
    static async deleteCupom(req, res) {
        const { id } = req.body;
        await Cupom.findByIdAndDelete(id);
        res.redirect("/cupons")
    }
}

module.exports = CupomController;