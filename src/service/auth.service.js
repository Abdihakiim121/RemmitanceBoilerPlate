const userModel = require('../model/user.model');
const logger = require('../config/logger');
const { ApiError } = require('../payload/apiErrors');
const permissions = require ('../model/permissions')

var jwt = require('jsonwebtoken');

// Another Login is Here
const Login = async (email, password) => {

    logger.info(`Authentication on email ${email} and password ${password} by using jwt`);

    let user = await userModel.getUserByEmailAndPassword(email, password);
    
    if (!user || user.length <= 0) {
        throw new ApiError(401, "Email or password does not match");
    }
        console.log('THE USER IS:='+user);
    let token = jwt.sign({userid:user.USERID, role:user.ROLENAME}, process.env.JWT_SECRET_KEY);
    console.log(user.USERID)
   // {userid:user[0].USERID, role:user[0].ROLENAME}
    return {accessToken: token,user:user};
}

const register = async (user) => {
    let err = '';
    // TODO:
    // check the email already exist if yes throw error account already exist.
    // if not then create
    let result = await userModel.create(user);
    if (!result)
        err = 'Something went wrong';

    return {result, err};
}

const getAllpermissions = async ()=>{
     return await permissions.getAllPermissions();
 }

module.exports={
    Login, 
    register, 
    getAllpermissions, 
}