const express = require('express');
const router = express.Router();
const customerController = require('../controller/customers.controller');
// const authMiddleware = require('../middleware/auth')
//router.get('/getCustomers', );

// router.get('/:userId', userController.getUserById); //userId validation
router.get('/getAllCustomers',  customerController.getAllCustomers);
router.post('/createCustomers', customerController.createCustomers)


module.exports = router;