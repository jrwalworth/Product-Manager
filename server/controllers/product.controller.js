const Product = require('../models/product.model');


const createProduct = (req, res) => {
    Product.create(req.body).then((newProduct) => {
        res.status(201).json(newProduct);
    }).catch((err) => {
        res.status(400).json({message:"Create Product failed.", error: err});
    });
};

const readAllProducts = (req, res) => {
    Product.find({}).then((allProducts) => {
        res.status(200).json(allProducts);
    }).catch((err) => {
        res.status(400).json({message:"Get Products was not successful.", error: err});
    });
};

const readProductById = (req, res) => {
    Product.findOne({_id: req.params.id}).then((product) => {
        res.json(product);
    }).catch((err) => {
        res.status(400).json({message: "Get Product by Id failed.", error: err});
    });
};

const updateProductById = (req, res) => {
    Product.updateOne({_id: req.params.id}).then((product) => {
        res.json(product);
    }).catch((err) => {
        res.status(400).json({message: "Update Product failed.", error: err});
    });
};

const deleteProductById = (req, res) => {
    Product.deleteOne({_id: req.params.id}).then((product) => {
        res.json(product);
    }).catch((err) => {
        res.status(400).json({message: "Delete Product failed.", error: err});
    });
};


module.exports = {
    createProduct,
    readAllProducts,
    readProductById,
    updateProductById,
    deleteProductById,
};