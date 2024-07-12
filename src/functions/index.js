const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();// this reads the env file 
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();
app.use(cors({ origin: true }));

app.use(express.json());//we are saying  you can read json 

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    //console.log(paymentIntent); paymentINtent stripachin clientu silk be object melk buzu neger tiyizal keza wust wanaw gn client_secret new yachi keteleyayu api gar yemnlkbet new
    res.status(201).json({
      clientSecret:paymentIntent.client_secret,
    });
    // hidetu backendachin le react clent secretachin yilkal then react degmo be stripe confirm endidereglet yachin  client_secret yitekemal 
  } else {
    res.status(403).json({
      message: "total payment must be greater than 0",
    });
  }
})

exports.api = onRequest(app);// this is listening using firebase
