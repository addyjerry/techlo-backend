const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
{
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],

  customerName: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  totalPrice: {
    type: Number,
    required: true
  },

  paymentStatus: {
  type: String,
  enum: ["pending", "paid"],
  default: "pending"
},

  paymentReference: String

},
{
  timestamps: true
}
);

module.exports = mongoose.model("Order", orderSchema);