const remittanceModel = require('../model/remittance.model')
const logger = require("../config/logger");

const getCustomers = async () =>{
    let resp = await remittanceModel.getCustomers()
    return resp;
}
const getCustomer = async (id,type) =>{
    let resp = await remittanceModel.getCustomer(id,type)
    return resp;
}

const createRamittance = async (user) =>{
 
        logger.info("Creating user ");
        return await remittanceModel.createRamittance(user);
}

const getAllremittance = async()=>{
    return await remittanceModel.getAllremittance();
} 

module.exports = {
    createRamittance,
    getCustomers,
    getCustomer, 
    getAllremittance
}