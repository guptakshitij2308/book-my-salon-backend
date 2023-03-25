const express = require("express");
const morgan = require("morgan");
const ExpressError = require("./utils/ExpressError");
const salons = require("./routes/salon");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/salons", salons);

app.get("/", (req, res) => {
  res.send("Hii");
});

app.all("*", (req, res, next) => {
  next(new ExpressError("Page not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "Oh no, Something went wrong!";
  }
  res.status(statusCode).json(err);
});

module.exports = app;
