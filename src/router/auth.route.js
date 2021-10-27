const express = require('express');
const router = express.Router();
const authctrl = require('../controller/auth.ctrl');
const validate = require('../middleware/validators')
const loginValidations = require('../validations/auth.validations');

router.post('/User', validate(loginValidations.login), authctrl.Login)
router.post('/register', validate(loginValidations.register), authctrl.register)

module.exports=router;