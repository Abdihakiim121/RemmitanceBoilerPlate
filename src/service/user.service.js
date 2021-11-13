const logger = require("../config/logger");
const userModel = require('../model/user.mode');
const { ApiError } = require("../payload/apErrors");

const isEmailExist= async(email)=>{
    let resp = await userModel.isEmailExist(email);
    if(resp.length<= 0){
        throw new ApiError (401, 'This Email does not exist')
    }
    return true
    
}

const isEmailCreated= async(email)=>{
    let resp = await userModel.isEmailExist(email);
    if(resp.length > 0){
        throw new ApiError (401, 'This Email is Created Already')
    }
    return true
 }

const createUser = async (user) => {
    logger.info("Creating user ");
    return await userModel.create(user);
}

const getAllUsers = async () => {
    return await userModel.getUsers();
}

const getUserByEmail = async (email) =>{
    let resp = await userModel.getUserByEmail(email)
    console.log(resp);
    return resp;
}

const updateUser = async (user) => {
    result = await userModel.update(user);
    return await result;
}

const deleteuser = async(email) =>{
    result = await userModel.del(email);
    console.log("result is +"+result);
    
    return await result;
}

module.exports={
    getAllUsers,
    isEmailExist,
    createUser,
    updateUser, 
    deleteuser,
    getUserByEmail,
    isEmailCreated
}