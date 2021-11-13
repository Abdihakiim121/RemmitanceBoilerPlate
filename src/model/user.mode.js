const database = require('../config/database');


//Get All Users from the database
const getUsers = async () => {
    return await database.executeOneParamQuery(`select * from users`);
}
//get a user by email
const getUserByEmail = async (email) => {
    let result = await database.executeQuery(`select * from users where email=:email`, [email])
    return result;
}
// Login 
const getUserByEmailAndPassword = async (email, password) => {
    let result = await database.executeQuery(`select * from users where email =:email and password=:password`, [email, password])
    if (!result)
        return null;
    return result[0];
}
// Create New Users
const create = async (user) => {
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = user.active;

    let result = await database.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
                                        VALUES (userid_seq.nextval, :email, :password, :fullName,:active)`
        , [email, password, fullName, active]);

    if (result.rowsAffected === 1)
        return true;

    return false;
}
// Checking whether email exist or no
const isEmailExist = (email) => {
    return database.executeOneParamQuery(`select * from users where email ='${email}'`)

}

//Updating from the database. 
const update = async (user) => {
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = user.active;
    let result = await database.executeOneParamQuery(`update users set password ='${password}', fullname='${fullName}', active='${active}' where email='${email}'`)
    return await result
}

//Delete Single Users Functions
const del = async (email) => {
    let query = `delete from users where email='${email}'`;
    console.log(query);
    return await database.executeOneParamQuery(query)
}

//exports.
module.exports = {
    getUserByEmail,
    create,
    update,
    isEmailExist,
    getUserByEmailAndPassword,
    del,
    getUsers
}
