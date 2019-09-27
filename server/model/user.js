const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //email: { type: String, required: true, unique: true }
}, { collection: 'user' },
{ versionKey: false }
);

const User = mongoose.model('User', userSchema);

module.exports = User;