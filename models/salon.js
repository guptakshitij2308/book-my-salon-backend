const mongoose = require("mongoose");
const Review = require("./Reviews");
const Owner = require("./Owner");

const Schema = mongoose.Schema;
const validator = require("validator");

const SalonSchema = new Schema({
  name: {
    type: String,
    required: [true, "Salon Name is required!"],
    trim: true,
    unique: true,
    maxlength: [30, "A Salon name must be less than 30 characters"],
    minlength: [10, "A Salon name must be greater than 10 characters"],
    validate: [validator.isAlpha, "A Tour name must only contain characters"],
  },
  address: {
    type: String,
    required: [true, "A salon must have a valid address"],
    trim: true,
    unique: [true, "A salon must have a unique address"],
    maxlength: [40, "A salon address must be less 40 characters"],
  },
  description: {
    type: String,
    required: [true],
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  availability: {
    openingTime: {
      type: String,
      required: [true, "A salon must have a opening time"],
    },
    closingTime: {
      type: String,
      required: [true, "A salon must have a closing time"],
    },
  },
  services: {
    type: [String],
    required: [true, "A salon must provide a service"],
  },
  price: {
    type: Number,
    min: 50,
    max: 150,
    default: 100,
  },
  reviews: [
    {
      type: Schema.Types.ObjectID,
      ref: "Reviews",
    },
  ],
  ownerName: [
    {
      type: Schema.Types.ObjectID,
      ref: "Owner",
    },
  ],
});

const Salon = mongoose.model("Salon", SalonSchema);

module.exports = Salon;
