const sharedModel = require('../model/shared.model');

// get countries
const getCountries = async () => {
let result = await sharedModel.getCountries();
return result;
}

// get currencies
const getCurrencies = async () => {
let result = await sharedModel.getCurrencies();
return result;
}

// get currency
const getCurrency = async (countryId) => {
let result = await sharedModel.getCurrency(countryId);
return result;

}

// get state
const getState = async (countryId) => {
    let result = await sharedModel.getState(countryId);
    return result;
}

// get city
const getCity = async (countryId,stateId) => {
    let result = await sharedModel.getCity(countryId,stateId);
    return result;
}

// get status
const getStatus = async () => {
    let result = await sharedModel.getStatus();
     return result;
}

const getPayments = async () => {
    let result = await sharedModel.getAllPayments();
     return result;
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