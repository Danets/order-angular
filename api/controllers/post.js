const mongoose = require('mongoose');
const Post = require('../models/post');

module.exports.getPosts = (req, res) => {

    Post.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
        if (err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })

};

module.exports.createPost = (req, res) => {

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

};

module.exports.updatePost = (req, res) => {

    Post.findByIdAndUpdate(
        { _id: req.body.id },
        { title: req.body.title, description: req.body.description },
        { new: true },
        (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })

};

module.exports.deletePost = (req, res) => {

    Post.findByIdAndDelete(req.body.id,
        (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })

};