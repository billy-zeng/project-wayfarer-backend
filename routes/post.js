const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/post', ctrl.users.show);
router.post('/post/:id', ctrl.users.create);
router.put('/post/update/:id', ctrl.users.update);

module.exports = router;