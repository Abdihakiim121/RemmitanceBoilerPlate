var status = require('http-status');
const {ApiError} = require('../payload/apErrors')
const apiResponse = require('../payload/apiResponse')
const jwt = require('jsonwebtoken');
//const authService = require('../service/auth.service')


const auth =(req, res, next) =>{
    let authHeaders = req.headers.authorization;
    let token =authHeaders.split(' ')[1];
    console.log("accessToken "+token);
    if(!token){
       // console.log("hello" +token );
        throw new ApiError(401, 'Pleasse provide a token')
    }
    
    let response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if(response)
    {
        next();
    }

    throw new ApiError (401, 'Yoour Token has expired, please login again');

}

module.exports={
    auth
}