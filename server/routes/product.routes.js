const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.readAllProducts);
    app.get('/api/products/:id', ProductController.readProductById);
    app.post('/api/products', ProductController.createProduct);
    app.put('/api/products/:id', ProductController.updateProductById);
    app.delete('/api/products/:id', ProductController.deleteProductById);
};