const db = require('../config/database');

// get countries
const getCountries = async () => {
    
   // return await db.executeQuery('select * from country');
    
    let qry = 'select * from country';
    let response = await db.executeOneParamQuery(qry);
    console.warn(response);
    return response;

}

// get currencies
const getCurrencies = async () => {
    let query = 'select * from currency';
    let response = await db.executeOneParamQuery(query);
    return response;
}

// get currency
const getCurrency = async (countryId) => {
    let qry = 'select * from currency where countryid = '+countryId;
    let response = await db.executeOneParamQuery(qry);
    console.log(response);
    return response;
}

// get state
const getState = async (countryId) => {
    let qry = 'select * from state where countryid = '+countryId;
    let response = await db.executeOneParamQuery(qry);
    console.log(response);
    return response;

}

// get city
const getCity = async (countryId,stateId) => {
    let qry = `select *from city where stateid =${stateId} or countryid = ${countryId}`;
    let response = await db.executeOneParamQuery(qry);
    return response;
}

// get status
const getStatus = async () => {
    let qry = `select * from status`;
    let response = await db.executeOneParamQuery(qry);
    return response;
}


const getAllPayments = async () => {
    let qry = `select * from payments`;
    let response = await db.executeOneParamQuery(qry);
    return response;
}


module.exports = {
    getCountries,
    getStatus,
    getCity,
    getState,
    getCurrency,
    getCurrencies, 
    getAllPayments,

}