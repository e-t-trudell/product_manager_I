const Product = require('../models/product.model');
module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({message: "Create some products"});
}
module.exports.createProduct = (request, response) => {
    Product.create(request.body) 
    .then(product => response.json(product))
    .catch(err => response.json(err));
}