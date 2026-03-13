const crypto = require("crypto");
const Order = require("../models/Order");
const Product = require("../models/Product");

const paystackWebhook = async (req, res) => {

  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.sendStatus(401);
  }

  const event = req.body;

  if (event.event === "charge.success") {

    const reference = event.data.reference;

    const order = await Order.findById(reference);

    if (!order) return res.sendStatus(404);

    if (order.paymentStatus === "paid") return res.sendStatus(200);

    order.paymentStatus = "paid";
    order.status = "paid";

    await order.save();

    // Deduct stock

    for (const item of order.items) {

      const product = await Product.findById(item.productId);

      if (!product) continue;

      product.inStock -= item.quantity;

      if (product.inStock < 0) product.inStock = 0;

      await product.save();
    }

  }

  res.sendStatus(200);

};

module.exports = { paystackWebhook };