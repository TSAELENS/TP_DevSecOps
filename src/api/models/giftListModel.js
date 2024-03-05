const mongoose = require('mongoose');

const giftListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  gifts: [
    {
      name: String,
      price: Number,
      reserved: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model('GiftList', giftListSchema);
