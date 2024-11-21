import joi from "joi-oid";

 const registerSchema = joi.object({
    name: joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
        'string.base': 'Name must be a string',
    }),
    lastName: joi.string().required().messages({
        'string.empty': 'Last name is required',
        'any.required': 'Last name is required',
        'string.base': 'Last name must be a string',
    }),
    email: joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'any.required': 'Email is required',
        'string.base': 'Email must be a string',
        'string.email': 'Email must be a valid email',
    }),
    password: joi.string().required().min(8).max(30).messages({
        'string.empty': 'Password is required',
        'any.required': 'Password is required',
        'string.base': 'Password must be a string',
        'string.min': 'Password must be at least 8 characters',
        'string.max': 'Password must be at most 30 characters',
    }),
    photoUrl: joi.string().required().messages({
        'string.empty': 'Photo URL is required',
        'any.required': 'Photo URL is required',
        'string.base': 'Photo URL must be a string',
    }),
    country: joi.string().required().messages({
        'string.empty': 'Country is required',
        'any.required': 'Country is required',
        'string.base': 'Country must be a string',
    })
});

export default registerSchema
