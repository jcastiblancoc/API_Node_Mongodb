const { ObjectId } = require('mongodb');
const {Database} = require('../database/index');
const {ProductsUtils} = require('./utils')

const COLLECTION = 'products'

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id: new ObjectId(id) });
}

const create = async(product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId
}

const updateById = async (id, UpdatedData) =>{
    const collection = await Database(COLLECTION);
    const result = await collection.updateOne(
        {_id: new ObjectId(id)},
        {$set: UpdatedData}
        );
        return id
}

const deleteById = async (id) => {
    const collection = await Database(COLLECTION);
    const result = await collection.deleteOne({_id: new ObjectId(id)});
    return id;
}

const generateReport = async (name, response) => {
    let products = await getAll();
    ProductsUtils.excelGenerator(products, name, response)
}

module.exports.ProductsServices = {
    getAll,
    getById,
    create,
    generateReport,
    updateById,
    deleteById
}