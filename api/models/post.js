const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String },
    description: { type: String }
}, { collection: 'post' },
{versionKey: false}
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

// mongoose.model('Post', postSchema);