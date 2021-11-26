const status = require('http-status');
const {ApiResponses}  = require('../payload/apiResponse');
const {ApiError} = require('../payload/apiErrors')
const authService = require('../service/auth.service');
const { handleAsync } = require('../utils/util');
//const permission = require('../model/permissions');

const Login = handleAsync(async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = await authService.Login(email, password);
    console.log(loginResponse);
    let message = res.__('loginSuccess', email);
    res.status(status.OK)
        .send(new ApiResponses(status.OK, message, loginResponse));
});

const register = handleAsync(async (req, res) => {

    let user = req.body;
    let { result, err } = await authService.register(user);

    if (err) {
        return res.status(status.INTERNAL_SERVER_ERROR)
            .send(new ApiError(status.INTERNAL_SERVER_ERROR, err));
    }

    res.status(status.OK).send(new ApiResponses(status.OK, res.__('registerSuccess'),result));
});

 const GetAllPermissions =handleAsync(async(req, res)=>{
    let result = await authService.getAllpermissions();
    res.status(status.OK).send(new ApiResponses(status.OK, 'List of Permissions', result))
 })

module.exports =
{
    Login,
    register,
    GetAllPermissions,
}

