const express = require('express');
const router = express.Router();
const register_controller = require('../controller/auth_account');

// router.get('/test', register_controller.add);

// router.post('/api/insert', register_controller.add);
router.get('/api/get', register_controller.checkUsers);

module.exports = router;