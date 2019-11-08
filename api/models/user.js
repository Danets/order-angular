const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

require('dotenv').config();

// create a schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    hash: String,
    salt: String
}, { collection: 'user' }
);

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        //email: this.email,
        name: this.username,
        exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET");  // IT IS REALLY IMPORTANT => DO NOT KEEP YOUR SECRET IN THE CODE!!! 
};

const User = mongoose.model('User', userSchema);

module.exports = User;

// mongoose.model('User', userSchema);