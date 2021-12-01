var status = require('http-status');
const { ApiError } = require('../payload/apiErrors')
const apiResponse = require('../payload/apiResponse')
const jwt = require('jsonwebtoken');
//const roles = require('../helpers/roles');
const permission = require('../model/permissions')
let { handleAsync } = require('../utils/util');
const NodeCache = require('node-cache');
const myCache = new NodeCache();
//const authService = require('../service/auth.service')

// Authentication Procedure
const authentication = (data) => handleAsync(async (req, res, next) => {
    let token = myCache.get("myKey");
    let userid = token.payload.userid;
    let role = token.payload.role;
    let state = false;
    console.log(state);
    let usrPermissions = await permission.getSingleUserPermission(role);
    console.log("User Permission"+usrPermissions);
    usrPermissions.forEach(d => {
        if (d.PERMISSIONNAME == data) {
            state = true;
        }
    });
    if (state) {
        return next();
    }

    throw new ApiError(401, `you haven't any permission to ${data} `)
});

//JWt Authentication Code 
const auth = (req, res, next) => {
    let authHeaders = req.headers.authorization;
    if (!authHeaders) {
        
        throw new ApiError(401, 'Pleasse provide a token')
    }
    let token = authHeaders.split(' ')[1];
    let response = jwt.verify(token, process.env.JWT_SECRET_KEY);
   var decoded = jwt.decode(token, { complete: true });
    if (response) {
       myCache.set("myKey", decoded);
        return next();
    }

   throw new ApiError(401, 'you have not permission');

   // throw new ApiError(401, 'Your Token has expired, please login again');

}

module.exports = {
    authentication,
     auth
}