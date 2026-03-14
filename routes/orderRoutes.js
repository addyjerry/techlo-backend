const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment, getOrders } = require('../controllers/orderController');

router.get('/', getOrders);           // ← add this
router.post('/', createOrder);
router.get('/verify/:reference', verifyPayment);

module.exports = router;