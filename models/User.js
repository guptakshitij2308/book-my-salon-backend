const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    contactNo: Number,
    email: String,
    address: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;