const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

// GET all products
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// POST create product
const createProduct = asyncHandler(async (req, res) => {
    const { name, price, brand, description, countInStock } = req.body;

    if (!name || !price) {
        res.status(400);
        throw new Error('Name and Price are required');
    }

    const product = new Product({
        name,
        price,
        brand,
        description,
        countInStock
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

module.exports = {
    getProducts,
    createProduct
};