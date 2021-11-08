const Joi = require('joi');
const login = Joi.object({
    userid: Joi.number().required(),
    username: Joi.string().required()
    // email: Joi.string().required().email(),
    // password: Joi.string().alphanum(),
    // age: Joi.number().required().max(120).min(18),
    // email: Joi.string().optional().email()
})
const register = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().alphanum(),
    age: Joi.number().max(150).min(18),
    // email:Joi.string().optional().email()
})
module.exports = {
    login,
    register
}

