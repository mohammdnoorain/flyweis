


const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio Auth Token
const client = new twilio(accountSid, authToken);

// Function to send OTP
const sendOtp = async (phoneNumber) => {
  try {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Send the OTP via SMS
    const message = await client.messages.create({
      body: `Your OTP is ${otp}`,
      to: phoneNumber,  // User's phone number
      from: process.env.TWILIO_PHONE_NUMBER // Your Twilio phone number
    });

    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
    return otp; // Return the generated OTP to save it or validate later

  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Could not send OTP. Please try again later.");
  }
};

module.exports = { sendOtp };
