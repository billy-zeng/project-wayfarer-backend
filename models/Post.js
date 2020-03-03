const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    // content: [{type: Schema.Type.ObjectId, ref: 'post'}],
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;