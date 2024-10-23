import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string().required().pattern(/[A-Za-z]{3}/).messages({
        "any.required" : 'MESSAGES Required',
        "string.pattern.base" : 'mast more 3 characters'
    }),
    body: Joi.string().min(7).max(20).messages({
        "string.min" : "body mast be at least 7 characters",
        "string.max" : "body mast be at longer 20 characters",
    }),
    userId:Joi.number().min(0).max(10).messages({
        "number.min": "user id mast be at least 0 ",
        "number.max": "we have just 10 users cart",

    })
})