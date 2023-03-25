const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const OwnerSchema = new Schema({
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
});

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
