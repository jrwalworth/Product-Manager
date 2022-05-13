const Product = require('../models/product.model');


const createProduct = (req, res) => {
    Product.create(req.body).then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
    }).catch((err) => {
        res.status(500).json({message:"Create Product failed.", error: err});
    });
};

const readAllProducts = (req, res) => {
    Product.find({}).then((products) => {
        console.log(products);
        res.status(200).json(products);
    }).catch((err) => {
        res.status(400).json({message:"Get Products was not successful.", error: err});
    });
};

const readProductById = (req, res) => {
    Product.findOne({_id: req.params.id}).then((oneProduct) => {
        res.json(oneProduct);
    }).catch((err) => {
        res.status(400).json({message: "Get Product by Id failed.", error: err});
    });
};

const updateProductById = (req, res) => {
    Product.updateOne({_id: req.params.id},
        req.body,
        {new: true, runValidators:"true"})
    .then((updatedProduct) => {
        res.json(updatedProduct);
    }).catch((err) => {
        res.status(400).json({message: "Update Product failed.", error: err});
    });
};

const destroyProductById = (req, res) => {
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
    destroyProductById,
};