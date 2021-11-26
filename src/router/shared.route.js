const express = require('express');
const router = express.Router();
const sharedController = require('../controller/shared.controller');
router.get('/getCountries', sharedController.getCountries);
router.get('/getcurrencies', sharedController.getCurrencies);
router.get('/getcurrency/:countryid', sharedController.getCurrency);
router.get('/getstate/:countryid', sharedController.getState);
router.get('/:countryid/:stateid', sharedController.getCity);
router.get('/status', sharedController.getStatus);
router.get('/getpayments', sharedController.getPayments);
// router.get('/:userId', userController.getUserById); //userId validation


module.exports = router;