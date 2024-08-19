const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdata"

    },

    withdrawal_amount: [
      {
        amount: {
          type: Number,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    credit_amount: [
      {
        amount: {
          type: Number,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],




  },

  {
    timestamps: true,
  }

);
const transactionData = mongoose.model("transactionData", userSchema);
module.exports = transactionData;
