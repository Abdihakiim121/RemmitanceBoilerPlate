const database = require('../config/database')


const getCustomers = async () =>{
    let query = `select c.cusid,customername,co.countryid,countryname, rates from customers c,country co,currency cu where 
    c.country = co.countryid and co.countryid = cu.countryid`
     let value = await database.executeOneParamQuery(query);
    console.log('Testing the Query'+ value)
    return  value;
}

const getCustomer = async (id,type) =>{
    let query =''
    if (type == 'equal'){
     query = `select c.cusid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currency cu where 
    c.country = co.countryid and co.countryid = cu.countryid and c.cusid = ${id}`
    }
    else{
     query = `select c.cusid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currency cu where 
    c.country = co.countryid and co.countryid = cu.countryid and c.cusid != ${id}`
    }
    return database.executeOneParamQuery(query)
}

const createRamittance  = async (user) =>{
    let send = user.send;
    let recieve = user.recieve;
    let amount = user.amount;
    let convertedamount = user.convertedamount;
    let charge = user.charge;
    let payment = user.payment;
    let status = user.status;
   
    let query = `insert into remit_table values(
        REMITID_SEQ.nextval, '${send}','${recieve}','${amount}','${convertedamount}','${charge}','${payment}','${status}',sysdate
    )`;
    console.log(query);
    return await database.executeOneParamQuery(query);
    

}
const getAllremittance = async()=>{
    return await database.executeOneParamQuery(`select * from remit_table`);
} 

module.exports = {
    createRamittance,
    getCustomers,
    getCustomer , 
    getAllremittance
}