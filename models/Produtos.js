const {model, Schema} = require('mongoose');

const Produto = model(
    "Produto",
    new Schema({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        quantity: {type: Number, required: true},
        kind: {type: String, required: true},
        couponActive: {type: Boolean, default: false}
    })
);

module.exports = Produto;