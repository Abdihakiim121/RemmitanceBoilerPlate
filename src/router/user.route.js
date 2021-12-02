const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.controller');
const userValidator = require('../validations/user.validation');
const validate = require ('../middleware/validators') ;
const authMiddleware = require('../middleware/auth')

// User Routing
// router.get('/getAllUsers',usersController.getAllUsers)
router.get('/getAllUsers',authMiddleware.auth ,authMiddleware.authentication('viewAllUsers'), usersController.getAllUsers)
router.post('/getUserByEmail',authMiddleware.auth, usersController.getUserByEmail)
router.post('/create',authMiddleware.auth,validate(userValidator.createUser),authMiddleware.authentication('create'),usersController.create)
router.patch('/updateUser',authMiddleware.auth,validate(userValidator.updateUser), authMiddleware.authentication('Update'),usersController.updateUser)
router.post('/delete/:email',authMiddleware.auth, authMiddleware.authentication('deleteUser'), usersController.deleteUser)

module.exports=router;


