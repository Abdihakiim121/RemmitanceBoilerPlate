const status = require('http-status');
const logger = require('../config/logger');
const { ApiError } = require('../payload/apErrors');
const { ApiResponses } = require('../payload/apiResponse');
const authService = require('../service/auth.service')

const Login =(req, res)=>{
    let email = req.body.email;
    let password = req.body.password;
    const loginResponse = authService.Login(email, password);

   // res.status(status.OK).send(loginResponse);
    res.status(status.OK).send(new ApiResponses(status.OK,"login Successfully",loginResponse));

}

const register=(req, res)=>{
    res.send('This is a registeration Page')
}


module.exports=
{
Login, 
register,
}

// exports.login= (req, res)=>{



//    console.log(process.env.PAYMENT_GATEWAY_URL);
//    res.status(status.OK).send('OK');
//     logger.warn("Hello From Logger");
// }
