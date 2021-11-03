const oracledb = require('oracledb');

const host = '15.15.0.59:1521'
const database = 'students'
const username = 'abdihakim'
const password = 'abdihakim'

oracledb.initOracleClient({ libDir: 'C:\\Users\\hp\\Downloads\\Compressed\\instantclient-basic-windows.x64-21.3.0.0.0\\instantclient_21_3' })

//checkConnection ();

async function checkConnection() {
    try {

        connection = await oracledb.getConnection({
            user: username,
            password: password,
            connectString: host + '/' + database

        })

        console.log('connection Successfull');
        //let response = await connection.execute('select * from students');
        // console.log(response);

        return await connection;

    } catch (err) {
        console.error(err);
    }
    // finally{
    //     if(connection){
    //        await connection.close();
    //     }
    // }

}



async function getAllStudents(query) {

    try {

        connection = await checkConnection();
        let result = await connection.execute(query)
        return await result

    } catch (err) {
        console.error(err);
    }

}


module.exports = {
    getAllStudents
}