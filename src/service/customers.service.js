const logger = require("../config/logger");
const customerModel = require('../model/customers.model');
// const { ApiError } = require("../payload/apiErrors");



// const createUser = async (customer) => {
//     logger.info("Creating user ");
//     return await customerModel.getCustomers(customer);
// }

const getAllCustomers = async () => {
    return await customerModel.getCustomers();
}

const createCustomers = async (user) =>{
 
    logger.info("Creating user ");
    return await customerModel.createCustomers(user);
}


module.exports ={
    getAllCustomers,
    createCustomers
}