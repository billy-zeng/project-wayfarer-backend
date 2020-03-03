const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//base route: localhost:4000/api/v1/posts

router.get('/users/:authorId', ctrl.posts.showByAuthor);
// router.get('/cities/:city', ctrl.posts.showByCity);
router.post('/create', ctrl.posts.create);
// router.put('/edit/:id', ctrl.posts.edit);
// router.put('/delete/:id', ctrl.posts.delete);

module.exports = router;
