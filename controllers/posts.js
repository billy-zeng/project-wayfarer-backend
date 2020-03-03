const db = require('../models');

const showByAuthor = (request, response) => {
  console.log(request.body)
  db.Post.find({"authorId": request.params.authorId}, (error, foundPosts) => {
    if (error) return response.status(500).json({
      status: 500,
      message: error
    });

    response.status(200).json({
      status: 200,
      data: foundPosts
    });
  });
};

const create = (request, response) => {
  console.log(request.body)
  db.Post.create(request.body, (error, newPost) => {
    if (error) return response.status(500).json({
      status: 500,
      message: error
    })

    newPost.authorId = request.session.currentUser;
    newPost.save();

    response.status(200).json({
      status: 200,
      data: newPost
    });
  });
};

module.exports = {
  showByAuthor,
  create
}
