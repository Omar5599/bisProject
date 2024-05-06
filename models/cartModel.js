const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    ownerId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required:true,
        // unique : true
    },
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    quantity:{
        type: Number,
        default:1
    }
  });
  const CartItem = mongoose.model('Cart', cartItemSchema);
  
  module.exports = CartItem;