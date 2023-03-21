const express = require("express");
const mongoose = require("mongoose");
const ExpressError = require('./utils/ExpressError');
const salons = require('./routes/salon');

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/bookmyspot");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  secret: 'thisshouldbeasecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}
app.use(session(sessionConfig));

app.use('/salons', salons)

app.get('/', (req, res) => {
  res.send('Hii');
})

app.all('*', (req, res, next) => {
  next(new ExpressError('Page not Found', 404));
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = 'Oh no, Something went wrong!';
  }
  res.status(statusCode).json(err);
})

app.listen(8080, () => {
  console.log("Serving on port 3000");
});
