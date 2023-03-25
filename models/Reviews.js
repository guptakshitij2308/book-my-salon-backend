const mongoose = require("mongoose");
const User = require("./User");
const Salon = require("./Salon");
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
  body: {
    type: String,
    minlength: [15, "A review must be at least 15 characters long"],
    maxlength: [50, "A review must at the most 50 characters long"],
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  author: [
    {
      type: Schema.Types.ObjectID,
      ref: User,
    },
  ],
  salon: [
    {
      type: Schema.Types.ObjectID,
      ref: Salon,
    },
  ],
});

const Reviews = mongoose.model("Reviews", ReviewSchema);

module.exports = Reviews;
