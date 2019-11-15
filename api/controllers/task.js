const mongoose = require('mongoose');
const Task = require('../models/task');

module.exports.getTasks = (req, res) => {
    // Task.find({date: req.body.date.valueOf()}, (err, doc) => {
    //     console.log(doc.date.format());
    //     if (err) {
    //         throw err;
    //         console.log(err)
    //     } 
    //     return res.status(200).json({
    //         status: 'success',
    //         data: doc
    //     })
    // })
    Task.find().exec( function(err, list) {
        res.json(list.map(function(item){
            if(moment.isMoment(item.date)){
                item.date = item.date.format("YYYY-MMMM-DD");
            }
            return item;
        })
    )
    })
};

module.exports.createTask = (req, res) => {

    const task = new Task({
        title: req.body.title,
        date: req.body.date
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