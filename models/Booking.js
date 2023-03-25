const mongoose = require("mongoose");
const Salon = require("./salon");
const User = require("./User");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  timeSlot: {
    type: String,
    required: [true, "A booking must have a time slot"],
  },
  services: {
    type: String,
    required: [true, "A booking must have a service"],
  },
  date: {
    type: Date,
    required: [true, "A booking must have a date slot"],
    default: Date.now(),
  },
  numberOfHours: {
    type: String,
    required: [true, "A booking must have a specified number of hours"],
  },
  salonName: [
    {
      type: Schema.Types.ObjectID,
      ref: "Salon",
    },
  ],
  bookingName: [
    {
      type: Schema.Types.ObjectID,
      ref: "User",
    },
  ],
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
