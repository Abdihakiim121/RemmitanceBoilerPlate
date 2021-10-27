const userModel = require('../model/user.mode');
const logger = require('../config/logger');
const { ApiError } = require('../payload/apErrors');

var jwt = require('jsonwebtoken');

const Login =(email, password)=>{
    logger.info(`Authentication on email ${email} and Password ${password}`);
     let user = userModel.getUserByEmailAndPassword(email, password);

    if (user.length<=0){
        throw new ApiError(403,'Username or Password is wrong');
    }


    let token = jwt.sign({user}, process.env.JWT_SECRET_KEY,  { expiresIn: '30s' });
    

    return {accessToken: token};
}


module.exports={
    Login
}