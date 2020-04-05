const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async list(request, response){
        const { page = 1 } = request.query;
        const products = await Product.paginate({}, { page: page, limite: 10 });

        return response.json(products);
    },

    async create(request, response){
        const product = await Product.create(request.body);

        return response.json(product);
    },

    async show(request, response){
        const product = await Product.findById(request.params.id);

        return response.json(product);
    },

    async update(request, response){
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true} );

        return response.json(product);
    },

    async delete(request, response){
        await Product.findByIdAndRemove(request.params.id);

        return response.send();
    }
};