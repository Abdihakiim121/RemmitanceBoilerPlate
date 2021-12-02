const express = require('express');
const router = express.Router();
const authctrl = require('../controller/auth.controller');
const validate = require('../middleware/validators')
const loginValidations = require('../validations/auth.validations');

// Routers
router.post('/login', validate(loginValidations.login), authctrl.Login)
router.post('/register', validate(loginValidations.register), authctrl.register)
router.get('/permissions', authctrl.GetAllPermissions)

module.exports = router;