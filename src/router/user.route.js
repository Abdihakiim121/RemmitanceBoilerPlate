const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.ctrl');
const userValidator = require('../validations/user.validation');
const validate = require ('../middleware/validators') ;
const authMiddleware = require('../middleware/auth')

//const app = express();
router.get('/getAllUsers',authMiddleware.auth, authMiddleware.authentication('viewAllUsers') ,usersController.getAllUsers)
router.post('/getUserByEmail', usersController.getUserByEmail)
router.post('/create',validate(userValidator.createUser),usersController.create)
router.patch('/updateUser',validate(userValidator.updateUser),usersController.updateUser)
router.post('/delete/:email', usersController.deleteUser)
//router.get('/getStudents', usersController.getAllStudent);

module.exports=router;


