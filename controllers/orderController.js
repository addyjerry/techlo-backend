const axios = require("axios");
const Order = require("../models/Order");

const DELIVERY_FEE = 30;

const createOrder = async (req, res) => {
  try {

    const {
      items,
      customerName,
      phone,
      location,
      paymentMethod,
      email
    } = req.body;

    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const totalPrice = subtotal + DELIVERY_FEE;

    const order = await Order.create({
      items,
      customerName,
      phone,
      location,
      paymentMethod,
      subtotal,
      deliveryFee: DELIVERY_FEE,
      totalPrice
    });

    // Cash on delivery
    if (paymentMethod === "cod") {
      return res.json({
        message: "Order placed successfully",
        order
      });
    }

    // Paystack initialization
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: totalPrice * 100,
        reference: order._id.toString(),
        channels: ["mobile_money"]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      paymentUrl: response.data.data.authorization_url
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const verifyPayment = async (req, res) => {
  try {

    const { reference } = req.params;

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
        }
      }
    );

    const data = response.data.data;

    if (data.status === "success") {

      const order = await Order.findByIdAndUpdate(
        reference,
        { paymentStatus: "paid" },
        { new: true }
      );

      return res.json({
        message: "Payment verified",
        order
      });

    }

    res.status(400).json({
      message: "Payment not successful"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
module.exports = { createOrder, verifyPayment };