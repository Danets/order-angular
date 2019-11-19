const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-moment')(mongoose);
const moment = require('moment');
moment.suppressDeprecationWarnings = true;

// moment.fn.toJSON = function() { return this.format(YYYY-MMMM-DD); }

const taskSchema = new Schema({
    title: { type: String },
    //date: { type: Date}
    date: { type: Date, default: () =>  moment().format('YYYY-MMMM-DD')},
    //date: {type: 'Moment'},
}, { collection: 'tasks'},
    { versionKey: false }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
