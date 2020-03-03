const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//base route:  /api/v1/auth


router.post('/signup', ctrl.auth.signup);
router.post('/login', ctrl.auth.login);




router.get('/verify', ctrl.auth.verify);
router.delete('/logout', ctrl.auth.logout);

module.exports = router;
