const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//base route: localhost:4000/api/v1/posts

// Hit this index route to query for posts by authorId -> localhost:4000/api/v1/posts?authorId=5e5ebf027546d576d7b84122
// Hit this index route to query for posts by city -> localhost:4000/api/v1/posts?city=sanfrancisco
router.get('/', ctrl.posts.index);
router.post('/', ctrl.posts.create);
router.put('/:id', ctrl.posts.update);
router.delete('/:id', ctrl.posts.destroy);

module.exports = router;
