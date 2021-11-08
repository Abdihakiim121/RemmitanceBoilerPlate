const status = require('http-status');
const { ApiResponses } = require('../payload/apiResponse');
const authService = require('../service/auth.service');
const { handleAsync } = require('../utils/util');

const Login = handleAsync(async (req, res) => {
    let userid = req.body.userid;
    let username = req.body.username;
    const loginResponse = await authService.Login(userid, username);
    console.log(userid, username);
    let message = res.__('loginSuccess',username);
    res.status(status.OK)
    .send(new ApiResponses(status.OK, message, loginResponse));

})

const register = (req, res) => {
    res.status(status.NOT_IMPLEMENTED).send(new ApiResponses(status.NOT_IMPLEMENTED, "Not Implemented"));
}

module.exports =
{
    Login,
    register,
}

