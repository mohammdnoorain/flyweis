const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdata"

    },
    relationship_manager_name: { type: String },
    phone_number: { type: String },

    email_id: { type: String },

  });
const rmdata = mongoose.model("rmData", userSchema);
module.exports = rmdata;
