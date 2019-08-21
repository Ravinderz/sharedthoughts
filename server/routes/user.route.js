const express = require('express');
const router = express.Router();

var user = require('../controllers/user.controller');

router.route('/login').post(user.login);
router.route('/register').post(user.register);
router.route('/update_user/:email').post(user.update_user);

module.exports = router;