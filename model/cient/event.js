const Joi = require('@hapi/joi');

exports.Add_Event_Record = Joi.object({
   description: Joi.string().min(3).max(100).required(),
   // email: Joi.string().email().required(),
    event: Joi.number().required(),
    startTime: Joi.string().min(3).max(100).required(),
    endTime: Joi.string().min(3).max(100).required(),
    
})
