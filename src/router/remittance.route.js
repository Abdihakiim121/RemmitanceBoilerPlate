let express = require('express');
let router = express.Router();
const remittanceController = require('../controller/remittance.controller');
const authMiddleware = require('../middleware/auth')
router.get('/getAllremittance', authMiddleware.auth ,authMiddleware.authentication('viewAllUsers'), remittanceController.getAllremittance)
router.post('/createRemittance',  remittanceController.createRamittance)
router.get('/getCustomers', authMiddleware.auth ,authMiddleware.authentication('viewAllUsers'), remittanceController.getCustomers)
router.get('/getCustomer/:id/:type', remittanceController.getCustomer)


module.exports = router;