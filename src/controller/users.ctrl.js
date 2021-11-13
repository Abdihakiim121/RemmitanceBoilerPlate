const status = require('http-status');
const logger = require('../config/logger');
const userService = require('../service/user.service');
let { ApiError } = require('../payload/apErrors');
let { ApiResponses } = require('../payload/apiResponse');
let database = require('../config/database');
const { handleAsync } = require('../utils/util');
const { data } = require('../config/logger');

const getAllUsers = handleAsync(async (req, res) => {
    let users = await userService.getAllUsers();
    res.status(status.OK).send(new ApiResponses(status.OK, "OK", users));
});

const getUserByEmail = handleAsync(async (req, res) => {
    let email = req.body
    let userdata = await userService.getUserByEmail(email.email);
    console.log('The Data Your were searching is found' + userdata)
    res.status(status.OK).send(new ApiResponses(status.OK, "The Data Is Found", userdata))
})

const create = handleAsync(async (req, res) => {
    logger.info(`Calling Create User`);
    let  data = req.body;
    let  result = await userService.isEmailCreated(data.email)
    if(result) {
    let  result = await userService.createUser(data)
    return res.status(status.OK).send(new ApiResponses(status.OK, 'Created Successfully', result))
    }
   })

const updateUser = handleAsync(async(req, res) => {
    let  data = req.body;
    let  result = await userService.isEmailExist(data.email)
    if(result) {
    let  result = await userService.updateUser(data)
    return res.status(status.OK).send(new ApiResponses(status.OK, 'Updated Succesfully', result))
    }
})

const deleteUser = handleAsync(async (req, res) => {
    let  data = req.body;
    let  result = await userService.isEmailExist(req.params.email)
    if(result) {
    let  result = await userService.deleteuser(req.params.email)
    return res.status(status.OK).send(new ApiResponses(status.OK, 'Deleted Succesfully', result))
}
})

module.exports = {
    getAllUsers,
    getUserByEmail,
    create,
    updateUser,
    deleteUser,
    }