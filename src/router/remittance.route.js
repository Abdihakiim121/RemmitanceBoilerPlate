let express = require('express');
let router = express.Router();
const remittanceController = require('../controller/remittance.controller');

router.get('/getCustomers', remittanceController.getCustomers)
router.get('/getCustomer/:id/:type', remittanceController.getCustomer)
router.post('/createRemittance', remittanceController.createRamittance)
router.get('/getAllremittance', remittanceController.getAllremittance)

module.exports = router;