const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    trim: true,
    maxlength: [30, "Your name must be less than 30 characters"],
  },
  contactNo: {
    type: String,
    required: true,
    minlength: [10, "A mobile number must be of 10 characters"],
    maxlength: [10, "A mobile number must be of 10 characters"],
    validate: [validator.isNumeric, "A mobile number must contain only digits"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provider a valid email address"],
  },
  password: {
    type: String,
    required: [true, "You must have a password"],
    minlength: 8,
    validate: [
      validator.isStrongPassword,
      "This password is not secure enough! Please try with a different password",
    ],
    select: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
