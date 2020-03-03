const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    authorId: {
        type: Schema.Type.ObjectId,
        ref: 'User'
    },
    city: {
        type: String
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        default: ''
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
