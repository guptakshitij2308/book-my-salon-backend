const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
    name: String,
    contactNo: Number,
    email: String
});

const Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;