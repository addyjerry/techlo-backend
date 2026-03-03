// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.json({
//         message: 'All products fetched successfully'
//     });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const {
    getProducts,
    createProduct
} = require('../controllers/productController');

router.route('/')
    .get(getProducts)
    .post(createProduct);

module.exports = router;