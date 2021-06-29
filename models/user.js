const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    phone: String,
    address: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;