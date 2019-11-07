const express = require('express');
const router = express.Router();

require('dotenv').config();

const ctrlProfile = require('../controllers/profile')
const ctrlAuth = require('../controllers/auth');

const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.SECRET_KEY,
    userProperty: 'payload'
});

// profile
router.get('/profile', auth, (req, res) => ctrlProfile.profileRead);

// authentication
router.post('/register', (req, res) => ctrlAuth.register);
router.post('/login', (req, res) =>  ctrlAuth.login);

module.exports = router;