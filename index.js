require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

const contactUsRouter = require('./routes/contact-us')
const app = express();
app.use(express.json());
app.use(cors());

// MongoDb
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("mongodb connected!");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use('/contact-us',contactUsRouter)

app.listen("8080", (req, res) => {
  console.log("server is listening");
});
