let status = require('http-status')
let remittanceService = require('../service/remittance.service')
// let {ApiError} =require ('../payload/ApiErrors')
let {ApiResponses} = require ('../payload/apiResponse')
const { handleAsync } = require('../utils/util');
const logger = require("../config/logger");

const getCustomers = async (req, res) =>{
    let result = await remittanceService.getCustomers();
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'got it', result))

}

const getCustomer = async (req, res) =>{
    let result = await remittanceService.getCustomer(req.params.id,req.params.type);
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'got it', result))

}

const createRamittance = handleAsync(async (req,res) =>{

    logger.info(`Calling Create User`);
    let  data = req.body;
    let  result = await remittanceService.createRamittance(data)
    return res.status(status.OK).send(new ApiResponses(status.OK, 'Created Successfully', result))
   
})

const getAllremittance = handleAsync(async (req, res) => {
    let users = await remittanceService.getAllremittance();
    res.status(status.OK).send(new ApiResponses(status.OK, "OK", users));
});

module.exports = {
    createRamittance,
    getCustomers,
    getCustomer, 
    getAllremittance
}