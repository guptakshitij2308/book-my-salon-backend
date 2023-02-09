const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OwnerSchema = new Schema({
    name: String,
    contactNo: Number,
    email: String
});

const Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;