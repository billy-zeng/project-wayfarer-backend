

const db = require('../models');

const show = (request, response) => {

        if (!request.session.currentUser) return response.status(401).json({
                status: 401,
                message: 'Hey you! Stop right there. Authorization required.'
            })
            db.Post.findById(
                //     request.session.currentUser.id, 
                    request.params.id,
                    request.body,
                    { new: true },
                    (error, foundUser) => {
                if (error) return response.status(500).json({
                    status: 500,
                    message: error,
                });
                response.status(200).json({
                    status: 200,
                    data: foundUser,
                });
            });
};


const create = (request, response) => {
        
        const blogPost = new blogPost(request.body);

        //saving an instance of the comment model to db:
        blogPost
                .save()
                .then(blogPost =>{
                        return blogPost.findById(request.params.postId);
                })
                .then(post => {
                        post.blogPost.unshift(blogPost);
                        return post.save();
                })
                .then(post => {
                        response.redirect('/');
                })
                .catch(err => {
                        console.log(err);
                });
};

const update = (request, response) => {

        if (!request.session.currentPost) return response.status(401).json({
                status: 401,
                message: 'Hey you! Stop right there. Authorization required.'
            })
            db.Post.findByIdAndUpdate(
                    request.session.currentPost.id, 
                    request.params.id,
                    request.body,
                    { new: true },
                    (error, foundPost) => {
                if (error) return response.status(500).json({
                    status: 500,
                    message: error,
                });
                response.status(200).json({
                    status: 200,
                    data: foundPost,
                });
            });
};





// router.get('/post', ctrl.users.show);
// router.post('/post/:id', ctrl.users.create);
// router.put('/post/update/:id', ctrl.users.update);


module.exports = {
        show, 
        create, 
        update,
}