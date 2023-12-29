const createError = require('http-errors');
const debug = require('debug')('app:module-products_controller');
const {ProductsServices} = require('./services');
const {Response} = require('../common/response');


module.exports.ProductsController = {
    getProducts: async (request, response) => {
        try {
            let products = await ProductsServices.getAll()
            Response.success(response, 200, 'Products list', products);
        } catch (error) {
            debug(error);
            response.error(response);
        }
    },
    getProduct: async (request, response) => {
        try {
            const {
                params: {id},
            } = request;
            let product = await ProductsServices.getById(id);
            if(!product){
                Response.error(response, new createError.NotFound());
            }else{
                Response.success(response, 200, `Product  list ${id}`, product);
            }
        } catch (error) {
            debug(error);
            response.error(response);
        }
    },
    CreateProduct: async (request, response) => {
        try {
            const {body} = request;
            if(!body || Object.keys(body).length === 0){
                Response.error(response, new createError.BadRequest());
            }
            else{
                const insertedId = await ProductsServices.create(body);
                Response.success(response, 201, 'Product Added', insertedId);
            }
        } catch (error) {
            debug(error);
            response.error(response);
        }
    },

    UpdateProduct: async (request, response) => {
        try {
            const {
                params: { id },
                body: updatedData,
            } = request;

            if (!updatedData || Object.keys(updatedData).length === 0) {
                Response.error(response, new createError.BadRequest('Invalid update data'));
            } else {
                let product = await ProductsServices.updateById(id, updatedData);
                Response.success(response, 200, 'Product updated successfully', product);
            }
        } catch (error) {
            debug(error);
            Response.error(response, new createError.InternalServerError('Internal server error'));
        }
    },

    DeleteProduct: async (request, response) => {
        try {
            const {
                params: { id },
            } = request;

            const deleteResult = await ProductsServices.deleteById(id);

            Response.success(response, 200, 'Product deleted successfully');
        } catch (error) {
            debug(error);
            Response.error(response, new createError.InternalServerError('Internal server error'));
        }
    },



    generateReport: (require, response) =>{
        try {
            ProductsServices.generateReport('Inventory', response);
        } catch (error) {
            debug(error);
            response.error(response);
        }
    },
};