const Joi = require('@hapi/joi');

exports.STUDENT_MODEL = Joi.object({
    username: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    contactNumber: Joi.number().required(),
    addressOne: Joi.string().min(3).max(100).required(),
    addressTwo: Joi.string().min(3).max(100).required(),
    nic: Joi.number().required(),
    password: Joi.string().min(6).required()
})
exports.STUDENT_LOGIN_MODEL = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})
