const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("unhandledException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Exception! 💥 Shutting down...");

  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => {
  console.log("DB connection established");
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection! 💥 Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
