const status = require('http-status');
const logger = require('../config/logger');
const customerService = require('../service/customers.service');
// let { ApiError } = require('../payload/apiErrors');
let { ApiResponses } = require('../payload/apiResponse');
let database = require('../config/database');
const { handleAsync } = require('../utils/util');
const { data } = require('../config/logger');


const getAllCustomers = handleAsync(async (req, res) => {
    let users = await customerService.getAllCustomers ();
    res.status(status.OK).send(new ApiResponses(status.OK, "OK", users));
});

   module.exports = {
       getAllCustomers
   }