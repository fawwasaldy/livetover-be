require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoString = process.env.URL_DATABASE;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());

const konsumenRoute = require("./src/routes/konsumen_route");
app.use("/konsumen", konsumenRoute);

const restoranRoute = require("./src/routes/restoran_route");
app.use("/restoran", restoranRoute);

const produkRoute = require("./src/routes/produk_route");
app.use("/produk", produkRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
