const express = require("express");
const app = express();

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;
const cors = require("cors");
const corsOrigin = process.env.CORS_ORIGIN
const { user } = require("./Route/userRoute.js");
const { appRoutes } = require("./Route/appRoute.js")


const connect = require("./Connection/dataBaseConnection.js")



app.use(
  cors({
    credentials: true,
    origin: corsOrigin,
  })
);


app.use(express.json({ limit: '50mb' }));
app.use("/", user);
app.use("/", appRoutes);



app.listen(PORT, () => {
  console.log("server running")
})

connect()
