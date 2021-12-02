const express = require('express');
const router = express.Router();
const sharedController = require('../controller/shared.controller');
const authMiddleware = require('../middleware/auth')


router.get('/getCountries', authMiddleware.auth ,authMiddleware.authentication('viewAllUsers'), sharedController.getCountries);
router.get('/getcurrencies',authMiddleware.auth ,authMiddleware.authentication('viewAllUsers'), sharedController.getCurrencies);
router.get('/getcurrency/:countryid',authMiddleware.auth ,authMiddleware.authentication('viewAllUsers'),sharedController.getCurrency);
router.get('/getstate/:countryid',authMiddleware.auth, sharedController.getState);
router.get('/:countryid/:stateid', authMiddleware.auth ,sharedController.getCity);
router.get('/status', authMiddleware.auth ,authMiddleware.authentication('viewAllUsers'),sharedController.getStatus);
router.get('/getpayments', authMiddleware.auth ,authMiddleware.authentication('viewAllUsers') ,sharedController.getPayments);
// router.get('/:userId', userController.getUserById); //userId validation


module.exports = router;