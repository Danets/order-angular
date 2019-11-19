const mongoose = require('mongoose');
const Task = require('../models/task');
const moment = require('moment');

const start = moment().subtract(24, 'hours').toDate();

module.exports.getTasks = (req, res) => {
    Task.find({'date': {'$gte': start} })
     .then(date => {
         if(moment.isMoment(date)) {
            return res.status(200).json({
                status: 'success',
                data: date
            })
         }
     })

    // return Task.find( {date: req.body.date }, function(err, doc){
    //     console.log(doc)
    //     if (err) {
    //         throw err;
    //         console.log(err)
    //     } 
    //     return res.status(200).json({
    //         status: 'success',
    //         data: doc
    //     })
    // })

    // return Task.find({date: req.body.date}).exec( function(err, list) {
    //     if (err) {
    //                 throw err;
    //                 console.log(err)
    //             } 
    //     console.log(list);
    //     res.json(list.map(function(item){
    //         if(moment.isMoment(item.date)){
    //             item.date = item.date.format("YYYY-MM-DD");
    //         }
    //         return item;
    //     })
    // )
    // })
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