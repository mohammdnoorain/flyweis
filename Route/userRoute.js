const express = require("express");
const usercontroller = require("../Controller/userController.js");

const user = express.Router();

user.post("/register-client", usercontroller.RegisterClient);
user.post("/verify-otp", usercontroller.verifyOtp);



module.exports = {
  user
};
