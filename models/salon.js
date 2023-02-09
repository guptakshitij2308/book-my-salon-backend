const mongoose = require('mongoose');
const Review = require('./Reviews');
const Owner = require('./Owner');
const Schema = mongoose.Schema;

const SalonSchema = new Schema({
    name: String,
    address: String,
    description: String,
    image: String,
    openingTime: String,
    closingTime: String,
    services: [String],
    price: Number,
    reviews: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Reviews'
        }
    ],
    ownerName: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Owner'
        }
    ]
});

const Salon = mongoose.model('Salon', SalonSchema);

module.exports = Salon