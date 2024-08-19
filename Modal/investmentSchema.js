const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdata"

    },
    current_invested: { type: String },
    current_profit: { type: String },

    current_profit_balance: { type: String },






  },

  {
    timestamps: true,
  }

);
const investmentdata = mongoose.model("investmentData", userSchema);
module.exports = investmentdata;
