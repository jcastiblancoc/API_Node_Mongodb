const createError = require('http-errors');
const debug = require('debug')('app:module-users_controller');
const {UsersServices} = require('./services');
const {Response} = require('../common/response');


module.exports.UsersController = {
    getUsers: async (request, response) => {
        try {
            let users = await UsersServices.getAll()
            Response.success(response, 200, 'Users list', users);
        } catch (error) {
            debug(error);
            response.error(response);
        }
    },
    getUser: async (request, response) => {
        try {
            const {
                params: {id},
            } = request;
            let user = await UsersServices.getById(id);
            if(!user){
                Response.error(response, new createError.NotFound());
            }else{
                Response.success(response, 200, `User ${id}`, user);
            }
        } catch (error) {
            debug(error);
            response.error(response);
        }
    },
    createUser: async (request, response) => {
        try {
            const {body} = request;
            if(!body || Object.keys(body).length === 0){
                Response.error(response, new createError.BadRequest());
            }
            else{
                const insertedId = await UsersServices.create(body);
                Response.success(response, 201, 'User Added', insertedId);
            }
        } catch (error) {
            debug(error);
            response.error(response);
        }
    },

    UpdateUser: async (request, response) => {
        try {
            const {
                params: { id },
                body: updatedData,
            } = request;

            if (!updatedData || Object.keys(updatedData).length === 0) {
                Response.error(response, new createError.BadRequest('Invalid update data'));
            } else {
                let user = await UsersServices.updateById(id, updatedData);
                Response.success(response, 200, 'User updated successfully', user);
            }
        } catch (error) {
            debug(error);
            Response.error(response, new createError.InternalServerError('Internal server error'));
        }
    },

    DeleteUser: async (request, response) => {
        try {
            const {
                params: { id },
            } = request;

            const deleteUser = await UsersServices.deleteById(id);

            Response.success(response, 200, 'Product deleted successfully', deleteUser);
        } catch (error) {
            debug(error);
            Response.error(response, new createError.InternalServerError('Internal server error'));
        }
    },
};