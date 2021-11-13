require('dotenv').config();
const oracledb = require('oracledb');
const util =require('../utils/util')

const host = '15.15.0.59:1521'
const database = 'students'
const username = 'abdihakim'
const password = 'abdihakim'

// const host = process.env.DB_HOST;
// const database = process.env.DB_DATABASE;
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

oracledb.initOracleClient({ libDir: 'C:\\Users\\hp\\Downloads\\Compressed\\instantclient-basic-windows.x64-21.3.0.0.0\\instantclient_21_3' })



async function checkConnection() {
    try {

        connection = await oracledb.getConnection({
            user: username,
            password: password,
            connectString: host + '/' + database

        })

        console.log('connection Successfull');
        

        return await connection;

    } catch (err) {
        console.error(err);
    }
   

}

checkConnection ();

const  getAllStudents = async (query) => {

    try {
        console.log('this getallstudents');
        connection = await checkConnection();
        let result = await connection.execute(query)
        return await util.converObject(result) 

    } catch (err) {
        console.error(err);
    }
    
 
    
}

const executeQuery = async (query, params) => {
    let connection;
    try {

        connection = await oracledb.getConnection({
            username: username,
            password: password,
            connectString: host + '/' + database
        });

        let result = await connection.execute(query,params);
      
        connection.commit();
        console.log('This log is the database i have posted from '+result);
        return await util.parseDatabaseObject(result)

    } catch (err) {
        console.log(`Error from database:  ${err}`)
        return null;
    } 
    
    
}

const executeOneParamQuery = async (query) => {
    let connection;
    try {

        connection = await oracledb.getConnection({
            username: username,
            password: password,
            connectString: host + '/' + database
        });

        let result = await connection.execute(query);
      
        connection.commit();
        console.log('This log is the database i have posted from '+result);
        return await util.parseDatabaseObject(result)

    } catch (err) {
        console.log(`Error from database:  ${err}`)
        return null;
    } 
    finally{
        if(connection){
           await connection.close();
        }
      }
    
    
    
}


module.exports = {
    getAllStudents, 
    executeQuery, 
    executeOneParamQuery
}