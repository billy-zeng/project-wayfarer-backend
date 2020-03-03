const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/:id', ctrl.users.show);
router.post('/:id/post', ctrl.users.create);
router.post('/:id/edit', ctrl.users.edit);



// url link to PROFILE page

router.get('/profile/view', ctrl.users.show);

router.post('/profile/edit', ctrl.users.edit);


module.exports = router;

