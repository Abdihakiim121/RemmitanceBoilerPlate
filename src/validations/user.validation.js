const { json } = require('body-parser');
const Joi = require('joi');

const createUser =Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required().min(12).max(100),
    email: Joi.string().email(),
   // password:Joi.string().required()

});

const UpdateUs =Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required().min(12).max(100),
    email: Joi.string().email(),
   // password:Joi.string().required()
});

module.exports={
    createUser, 
    UpdateUs,
    
}