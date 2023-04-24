const express = require('express');
const router = express.Router();
const register_controller = require('../controller/auth_account');

router.get('/api/get', register_controller.checkUsers);
router.post('/login', register_controller.loginAccount);
router.post('/register', register_controller.registerAccount);
router.get('/checkLoginStatus', register_controller.loginStatus);
module.exports = router;