const express = require('express');
const router = express.Router();
const register_controller = require('../controller/auth_account');

router.get('/api/get', register_controller.checkUsers);

router.post('/login', register_controller.loginAccount);

router.post('/register', register_controller.registerAccount);

router.get('/checkLoginStatus', register_controller.loginStatus);

router.post('/logout', register_controller.logout);

router.get('/userData', register_controller.userData);

router.put('/update/:id', register_controller.update);
module.exports = router;