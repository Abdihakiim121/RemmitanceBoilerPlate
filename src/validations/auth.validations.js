const Joi = require('joi');

const login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string(),
});

const register = Joi.object({
       email: Joi.string().required(),
    password: Joi.string(),
    fullName: Joi.string().required(),
    active: Joi.number().required()
});

module.exports = {
    login,
    register
}

