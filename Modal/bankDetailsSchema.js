const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdata"

    },
    account_holder_name: { type: String, required: true },
    account_number: { type: String, required: true },

    ifsc_code: { type: String, required: true },

  });
const bankdata = mongoose.model("bankData", userSchema);
module.exports = bankdata;
