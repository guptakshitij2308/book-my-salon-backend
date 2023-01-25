const express = require("express");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/bookmyspot");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
