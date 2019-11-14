const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String }
}, { collection: 'tasks' },
    { versionKey: false }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
