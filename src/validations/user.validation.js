const { json } = require('body-parser');
const Joi = require('joi');


const createUser = Joi.object({
     // userid: Joi.number().required(),
   email: Joi.string().required().email(),
   password: Joi.string().required(),
   fullName:   Joi.string().required(),
   active:  Joi.number().required()
   });

const updateUser =Joi.object({
   // userid: Joi.number().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    fullName:   Joi.string().required(),
    active:  Joi.number().required()
   // password:Joi.string().required()
});

module.exports={
    createUser, 
    updateUser,
    
}