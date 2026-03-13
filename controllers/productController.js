const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {

    const {
      category,
      condition,
      minPrice,
      maxPrice,
      search,
      sort
    } = req.query;

    let filter = {};

    // CATEGORY FILTER
    if (category) {
      filter.category = category;
    }

    // CONDITION FILTER
    if (condition) {
      filter.condition = condition;
    }

    // PRICE FILTER
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // SEARCH (name search)
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i" // case insensitive
      };
    }

    // QUERY DATABASE
    let query = Product.find(filter);

    // SORTING
    if (sort) {
      query = query.sort(sort);
    } else {
      query = query.sort('-createdAt'); // newest first
    }

    const products = await query;

    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts };