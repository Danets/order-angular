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
const ctrlTask = require('../controllers/task');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// // authentication
router.post('/register', ctrlAuth.register);

router.post('/login', ctrlLogin.login);

// Posts
router.get('/post', ctrlPost.getPosts);

router.post('/post', ctrlPost.createPost);

router.put('/post', ctrlPost.updatePost);

router.post('/post/deletePost', ctrlPost.deletePost);

// Tasks
// router.post('/task/date', ctrlTask.getTasks);

// router.post('/task', ctrlTask.createTask);

// router.put('/post', ctrlPost.updatePost);

// router.post('/task/deleteTask', ctrlTask.deleteTask);

module.exports = router;