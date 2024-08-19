const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdata"

    },
    nominee_name: { type: String, required: true },
    relation_with_you: { type: String, required: true },

    nominee_phone: { type: String, required: true },
    nominee_email: {
      type: String,
    },
    nominee_aadhaar_number: { type: String, required: true },


  },

);
const nomineedata = mongoose.model("nomineeData", userSchema);
module.exports = nomineedata;
