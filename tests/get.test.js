const data = require('../src/products/services');

describe('getProducts', () => {
    it('should return an array of posts', async () => {
    const posts = await data.ProductsServices.getAll();
    expect(posts).toBeInstanceOf(Array);
    });
});


describe('getById', () => {
    it('should return the correct product for a valid ID', async () => {
    const productId = '659456fbdcf81749e92f3f03';

    const product = await data.ProductsServices.getById(productId);
    const objectIdValue = product._id.toString();
    expect(product).toBeDefined();
    expect(objectIdValue).toBe(productId);
    });

    it('should return null for an invalid ID', async () => {
    const invalidProductId = null;

    const product = await data.ProductsServices.getById(invalidProductId);

    expect(product).toBeNull();
    });
});