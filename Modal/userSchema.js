const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },

    phone: { type: String, required: true },
    otp: {
      type: String,
    },
    otpExpiration: {
      type: Date,
    },


  },

);
const Login = mongoose.model("userdata", userSchema);
module.exports = Login;
