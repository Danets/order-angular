const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/user';

const User = require('./model/user')

const Post = require('./model/post');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    app.listen(3000, () => console.log('Angular server running on port 3000!'));
});

app.post('/api/user/login', (req, res) => {

    User.find({
        username: req.body.username, password: req.body.password
    }, function (err, user) {
        if (err) throw err;

        if (user.length === 1) {
            return res.status(200).json({
                status: 'success',
                data: user
            })
        } else {
            return res.status(200).json({
                status: 'fail',
                message: 'Login Failed'
            })
        }

    })
})

app.post('/api/user/create', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save((err, doc) => {
        if (err) throw err;

        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })

})

app.post('/api/post/getAllPost', (req, res) => {
    Post.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
        if (err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })
})

app.post('/api/post/getPost', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save((err, res) => {
        if (err) throw err;
        return res.status(200).json({
            status: 'success',
            data: res
        })
    })
})

app.post('/api/post/createPost', (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save((err, doc) => {
        if (err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })
})

app.post('/api/post/updatePost', (req, res) => {
    Post.findByIdAndUpdate(
        {_id: req.body.id },
        { title : req.body.title, description: req.body.description },
        {new: true}, 
        (err, doc) => {
        if(err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })
})

app.post('/api/post/deletePost', (req, res) => {
	Post.findByIdAndDelete(req.body.id,
        (err, doc) => {
        if(err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })
})
