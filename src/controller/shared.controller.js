const status = require("http-status");
const sharedService = require("../service/shared.service");
const {ApiResponses} = require("../payload/ApiResponse");
const {handleAsync} = require("../utils/util");
const {apiError} = require("../payload/apiErrors");




// get countries
const getCountries = handleAsync(async (req, res) => {
    let result = await sharedService.getCountries();
    console.warn('Midaan waxey wadaa'+result);
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'ALL countries', result));

});

// get currencies
const getCurrencies = async (req, res) => {
    let result = await sharedService.getCurrencies();
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'currencies', result));
}

// get currency
const getCurrency = async (req, res) => {
    let countryId = req.params.countryid;
    console.log(countryId);
    let result = await sharedService.getCurrency(countryId);
    console.log(result);
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'One Countries Currency', result));
}

// get state
const getState = async (req, res) => {
    let countryId = req.params.countryid;
    
    let result = await sharedService.getState(countryId);
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'single state', result));
}

// get city
const getCity = async (req, res) => {
    let countryId = req.params.countryid;
    let stateid = req.params.stateid;
    let result = await sharedService.getCity(countryId,stateid);
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'city', result));

}

// get status
const getStatus = async (req, res) => {
    let result = await sharedService.getStatus();
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'status', result));

}

const getPayments = async (req, res) => {
    let result = await sharedService.getPayments();
    res.status(status.OK)
    .send(new ApiResponses(status.OK, 'status', result));

}





module.exports = {
    getCountries,
    getStatus,
    getCity,
    getState,
    getCurrency,
    getCurrencies,
    getPayments

}