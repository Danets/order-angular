const mongoose = require('mongoose');
const Task = require('../models/task');

module.exports.getTasks = (req, res) => {

    Task.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
        if (err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })

};

module.exports.createTask = (req, res) => {

    const task = new Task({
        title: req.body.title
    })

    task.save((err, doc) => {
        if (err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })

};

module.exports.deleteTask = (req, res) => {

    Task.findByIdAndDelete(req.body.id,
        (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })

};