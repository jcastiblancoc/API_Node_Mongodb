const { ObjectId } = require('mongodb');
const data = require('../src/products/services');
const { Database } = require('../src/database/index');

jest.mock('../src/database/index');

describe('getProducts', () => {
    it('should return an array of products', async () => {
        const mockProducts = [
        { _id: '1', name: 'Product 1' },
        { _id: '2', name: 'Product 2' },
        ];

        Database.mockResolvedValue({
        find: jest.fn().mockReturnValue({
            toArray: jest.fn().mockResolvedValue(mockProducts),
        }),
        });

        const products = await data.ProductsServices.getAll();

        expect(products).toBeInstanceOf(Array);
    });
});


describe('getById', () => {
    it('should return the correct product for a valid ID', async () => {
        const mockProduct = { _id: new ObjectId('659456fbdcf81749e92f3f00'), name: 'Mocked Product' };

        Database.mockResolvedValue({
            findOne: jest.fn().mockResolvedValue(mockProduct),
        });

        const productId = '659456fbdcf81749e92f3f00';
        const product = await data.ProductsServices.getById(productId);

        expect(product).toBeDefined();
        expect(product._id.toString()).toBe(productId);;
    });

    it('should return null for an invalid ID', async () => {
        const mockProduct = null;

    Database.mockResolvedValue({
    findOne: jest.fn().mockResolvedValue(mockProduct),
    });

    const invalidProductId = null;
    const product = await data.ProductsServices.getById(invalidProductId);

    expect(product).toBeNull();
    });
});