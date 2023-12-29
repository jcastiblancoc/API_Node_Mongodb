const express = require('express');

const {ProductsController} = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
    .get('/', ProductsController.getProducts)
    .get('/report', ProductsController.generateReport)
    .get('/:id', ProductsController.getProduct)
    .post('/', ProductsController.CreateProduct)
    .put('/:id', ProductsController.UpdateProduct)
    .delete('/:id', ProductsController.DeleteProduct)

app.use('/api/products', router)
}