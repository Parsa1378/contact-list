const express = require('express');
const router = express.Router()
const { createUser, updateUser } = require('../controller/userController');

router.route('/sign_up').post(createUser);

module.exports = router;