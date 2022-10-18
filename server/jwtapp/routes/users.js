const express = require('express');
const router = express.Router();
const userController = require('../app/user');


router.post('/login', userController.logins)

module.exports = router;
