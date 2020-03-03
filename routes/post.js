const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//to make edits:  
router.get('/post/:id', ctrl.post.show);
router.post('/post/create', ctrl.post.create);
router.put('/post/update/:id', ctrl.post.update);

module.exports = router;
