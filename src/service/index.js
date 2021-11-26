const authService = require('./auth.service');
const userService = require('./user.service');
const sharedService=require('./shared.service');
const remittanceService = require('./remittance.service');
const customerService = require('./customers.service');



module.exports= 
{
    authService,
    userService, 
    sharedService, 
    remittanceService, 
    customerService
}