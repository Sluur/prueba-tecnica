require("dotenv").config();

const mongoose = require("mongoose");
const config = require("./config.json");
mongoose.connect(config.conntectionString);

const express = require("express");

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

//Ruta de productos
const productRoutes = require("./routes/product.routes");
app.use("/productos", productRoutes);

app.use((req, res) => {
  res.status(400).json({ error: "Ruta no encontrada" });
});

const PORT = 8080;
app.listen(8080);
