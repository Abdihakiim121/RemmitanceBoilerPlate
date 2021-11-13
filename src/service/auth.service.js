const userModel = require('../model/user.mode');
const logger = require('../config/logger');
const { ApiError } = require('../payload/apErrors');
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
    let token = jwt.sign({user}, process.env.JWT_SECRET_KEY);
   // {userid:user[0].USERID, role:user[0].ROLENAME}
    return {accessToken: token};
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

// const Login = async (userid, username)=>{
//     logger.info(`Authentication on email ${userid} and Password ${username}`);
//      let user = await userModel.getUsernameAndUserId(userid, username);

//     if (user.length<=0){
//         console.log(user.length)
//         throw new ApiError(403,'UserId  or Username is wrong');
//     }


//     let token = jwt.sign({user}, process.env.JWT_SECRET_KEY,  { expiresIn: '30s' });
    

//     return {accessToken: token};
// }

// const Login =(email, password)=>{
//     logger.info(`Authentication on email ${email} and Password ${password}`);
//      let user = userModel.getUserByEmailAndPassword(email, password);

//     if (user.length<=0){
//         throw new ApiError(403,'Username or Password is wrong');
//     }


//     let token = jwt.sign({user}, process.env.JWT_SECRET_KEY,  { expiresIn: '30s' });
    

//     return {accessToken: token};
// }


module.exports={
    Login, 
    register, 
    getAllpermissions, 
}