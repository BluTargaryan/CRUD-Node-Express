const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", productRoute);

//read func, send displays in browser
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

//connect db, checks & error catch
mongoose
  .connect(
    "mongodb+srv://opeyemiyolo:M9yaJApnI6D2lBiM@backenddb.v707ffj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connect failed");
  });
