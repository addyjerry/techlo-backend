const express = require("express");

const router = express.Router();

const {
  createOrder,
  verifyPayment
} = require("../controllers/orderController");

router.post("/", createOrder);

router.get("/verify/:reference", verifyPayment);

module.exports = router;