const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const productRouter = require("./routes/productRoute");
const commentRouter = require("./routes/commentsRoute");
const authRouter = require("./routes/authRoute");

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", authRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Something went wrong! Please try again later." });
});

module.exports = app;
