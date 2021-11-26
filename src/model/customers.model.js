const database = require('../config/database');



const getCustomers = async () => {
    let qry = 'select * from customers';
    let response = await database.executeOneParamQuery(qry);
    console.warn('the response is',response);
    return response;

   // return await database.executeOneParamQuery(`select * from customers`);
}


const createCustomers = async (customers) => {
    // let cusid = customers.cusid;
    let customername = customers.customername;
    let phone = customers.customername;
    let country = customers.country;
    let state = customers.state;
    let city = customers.city;

    let result = await database.executeQuery(`INSERT INTO customers (cusid, customername, phone, country, state, city)
                                        VALUES (cusid_seq.nextval, :customername, :phone, :country,:state, :city)`
        , [customername, phone, country, state, city]);

    if (result.rowsAffected === 1)
        return true;

    return false;
}


module.exports ={

    getCustomers

}