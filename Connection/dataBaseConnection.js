
const mongoose = require("mongoose");


const connect = () => {

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("MongoDB connected2");
  }).catch(err => {
    console.error("MongoDB connection error:", err);
  });


}


module.exports = connect;


