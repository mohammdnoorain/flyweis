require("dotenv").config();
const Userschema = require("../Modal/userSchema.js");
const { sendOtp } = require("../thirdPartyApis/smsService.js");
const jwt = require("jsonwebtoken");

const RegisterClient = async (req, res) => {
  try {
    const { phone } = req.body;

    // Generate and send OTP
    const otp = await sendOtp(phone);
    const user = await Userschema.findOne({ phone: phone });
    if (user) {

      const filter = { phone: phone };
      const update = { $set: { otp: otp } };
      const options = { new: true };
      const updatedUser = await Userschema.findOneAndUpdate(filter, update, options);

      return res.status(201).send({ username: user.name, exist: true, message: "User already exists, OTP updated" });

    }


    const register = new Userschema({
      phone: phone,
      otp: otp
    });

    const result = await register.save();

    return res.status(201).send({ success: true, result, message: "Registered successfully. OTP sent to your phone." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;

    const user = await Userschema.findOne({ otp: otp });
    if (!user) {
      return res.send({
        success: false,
        message: "DATA not present",
      });
    }


    if (user.otp.toString() !== otp.toString()) {
      return res.send({
        success: false,
        message: "WRONGE OTP",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.secretkey, { expiresIn: "4d" });
    // console.log("Generated token:", token);

    return res.send({
      success: true,
      username: user.name,
      token: token,

      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {

  RegisterClient,
  verifyOtp
}
