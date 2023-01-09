const express = require("express");
const app = express();
require("./studentServer/helper/init_mongodb.js")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const student =require("./studentServer/Router/student")





app.use(express.json({limit: '50mb'}));
app.use(cors({
  })) 
  app.use(cookieParser());
app.use("/api/student", student)

// http://localhost:3000/api/paymentmode/Razorpay/orders
app.listen(5000, _=> console.log("backend server is running on port: "+ 5000))


