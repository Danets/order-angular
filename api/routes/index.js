const express = require('express');
const router = express.Router();

require('dotenv').config();

const jwt = require('express-jwt');
const auth = jwt({
    secret: "MY_SECRET",
    userProperty: 'payload'
});

// Import Controllers!
const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/auth');
const ctrlLogin = require('../controllers/login');
const ctrlPost = require('../controllers/post');

// profile
router.get('/profile', auth, (req, res) => ctrlProfile.profileRead);

// // authentication
router.post('/register', (req, res) => ctrlAuth.register);

router.post('/login', (req, res) => ctrlLogin.login);

// Posts
router.get('/post', function (req, res) {
    ctrlLogin.login
});

router.post('/post', function (req, res) {
    ctrlPost.createPost
});

router.post('/post', function (req, res) {
    ctrlPost.deletePost
});

module.exports = router;