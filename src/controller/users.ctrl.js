const status = require('http-status');
const logger = require('../config/logger');
const userService = require('../service/user.service');
let { ApiError } = require('../payload/apErrors');
let { ApiResponses } = require('../payload/apiResponse');
const { date } = require('joi');

const getAllUsers = (req, res) => {
    let users = userService.getAllUsers();
    res.status(status.OK).send(users);
}

const getUserByEmail = (req, res) => {
    let email = req.body
    let userdata = userService.getUser(email.email);
    res.status(status.OK).send(new ApiResponses(status.OK, "Waa la helay", userdata))
}

const create = (req, res) => {
    // TODO:
    logger.info({ message: 'Calling create user' });
    let user = req.body;
    console.log(user);


    if (userService.isEmailExist(user.email)) {
        return res.status(status.NOT_ACCEPTABLE)
            .send(new ApiError(status.NOT_ACCEPTABLE, 'this userID is already exist'));
    }
    let createUserStatus = userService.createUser(user);
    // cuser = userService.createUser(user);
    if (createUserStatus) {

        return res.status(status.OK).send(new ApiResponses(status.OK, 'created succcesfully'));
    }
    return res.status(status.INTERNAL_SERVER_ERROR).send(new ApiError(status.BAD_REQUEST, 'Something Went Wrong'));
}

const updateUser = (req, res) => {
    let email = req.body;
    //console.log(email);

    if (!userService.isEmailExist(email.email)) {

        return res.status(status.NOT_ACCEPTABLE).send('This id does not exist')
    }

    result = userService.updateUsr(email)
    //console.log(result);
    if (result) {
        return res.status(status.OK).send(new ApiResponses(status.OK, "Updated Successfully", result))
    }

}

const deleteUser = (req, res) => {
    data = req.body;
    if (!userService.isEmailExist(data.email)) {

        return res.status(status.NOT_ACCEPTABLE).send(new ApiError(status.NOT_ACCEPTABLE,'This email does not exist'))
    }

    result = userService.deleteuser(data)
    if (result) {
        return res.status(status.OK).send(new ApiResponses(status.OK,"deleted Successfully",result));
    }
}





module.exports = {
    getAllUsers,
    getUserByEmail,
    create,
    updateUser,
    deleteUser
}