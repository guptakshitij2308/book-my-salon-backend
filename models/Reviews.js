const mongoose = require('mongoose');
const User = require('./User')

const ReviewSchema = new mongoose.Schema({
    body: String,
    rating: Number,
    author: [
        {
            type: Schema.Types.ObjectID,
            ref: User
        }
    ]
});

const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = Reviews;