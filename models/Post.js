const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    authorId: {
<<<<<<< HEAD
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
=======
        type: Schema.Type.ObjectId,
        ref: 'User'
    },
    city: {
        type: String
    },
>>>>>>> submaster
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
