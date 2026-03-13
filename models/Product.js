const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  originalPrice: {
    type: Number
  },

  condition: {
    type: String
  },

  image: {
    type: String
  },

  badge: {
    type: String
  },

  specs: [
    {
      type: String
    }
  ],

  inStock: {
    type: Number,
    default: 0
  }

},
{
  timestamps: true
}
);

module.exports = mongoose.model('Product', productSchema);