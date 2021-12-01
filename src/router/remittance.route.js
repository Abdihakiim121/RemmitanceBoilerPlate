let express = require('express');
let router = express.Router();
const remittanceController = require('../controller/remittance.controller');

router.get('/getAllremittance', remittanceController.getAllremittance)
router.post('/createRemittance', remittanceController.createRamittance)
router.get('/getCustomers', remittanceController.getCustomers)
router.get('/getCustomer/:id/:type', remittanceController.getCustomer)


module.exports = router;