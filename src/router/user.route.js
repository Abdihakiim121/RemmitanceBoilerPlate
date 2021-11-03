const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.ctrl');
const userValidator = require('../validations/user.validation');
const validate = require ('../middleware/validators') ;
const authMiddleware = require('../middleware/auth')

const app = express();
router.get('/allUser',authMiddleware.auth, usersController.getAllUsers)
router.post('/getUserByEmail', usersController.getUserByEmail)
router.post('/create', authMiddleware.auth,validate(userValidator.createUser),usersController.create)
router.patch('/updateUser',validate(userValidator.UpdateUs),usersController.updateUser)
router.post('/delete', usersController.deleteUser)
router.get('/getStudents', usersController.getAllStudent);

module.exports=router;


