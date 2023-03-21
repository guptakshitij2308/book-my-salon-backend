const mongoose = require('mongoose');
const Salon = require('./salon');
const User = require('./User');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    timeSlot: String,
    services: String,
    date: Date,
    salonName: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Salon'
        }
    ],
    bookingName: [
        {
            type: Schema.Types.ObjectID,
            ref: 'User'
        }
    ]

});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;