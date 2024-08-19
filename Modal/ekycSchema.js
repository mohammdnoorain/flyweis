const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdata"

    },
    aadhar_card_number: { type: String, required: true },
    pan_card_number: { type: String, required: true },

    date_of_birth: { type: String, required: true },
    permanent_address: {
      type: String,
    },
    what_you_do: { type: String },


  },

);
const kycdata = mongoose.model("ekycData", userSchema);
module.exports = kycdata;
