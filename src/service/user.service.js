const logger = require("../config/logger");
const userModel =require('../model/user.mode')

const isEmailExist=(email)=>{
    if(userModel.isEmailExist(email))
    {
        //console.log("");
       return true;
    }
    return false;
}

const createUser =(user) =>{

   // logger.log("Creating User");
    let status = userModel.create(user);
    return status;
}

const getAllUsers = () =>{
    // return userModel.getUsers();
    return userModel.getUsernameAndUserId();
}

const getUser = (email) =>{
    return userModel.getOneUser(email);
}


const updateUsr = (user) => {
    result = userModel.update(user);
    return result;
}

const deleteuser = (email) =>{
    result = userModel.del(email);
    return result;
}

module.exports={
    getAllUsers,
    isEmailExist,
    createUser,
    updateUsr, 
    deleteuser,
    getUser


}