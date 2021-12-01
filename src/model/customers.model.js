const database = require('../config/database');

const getCustomers = async () => {
    let qry = 'select * from customers';
    let response = await database.executeOneParamQuery(qry);
    console.warn('the response is',response);
    return response;

   // return await database.executeOneParamQuery(`select * from customers`);
}


const createCustomers = async (customers) => {
    //let send = user.send;
    let customername = customers.customername;
    let phone = customers.phone;
    let country = customers.country;
    let state = customers.state;
    let city = customers.city;
   // let status = user.status;
   
    let query = `insert into customers values(
        customerid_seq.nextval, '${customername}','${phone}',${country},${state},${city})`;
    console.log(query);
    return await database.executeOneParamQuery(query);
}
module.exports ={
    getCustomers, 
    createCustomers
}