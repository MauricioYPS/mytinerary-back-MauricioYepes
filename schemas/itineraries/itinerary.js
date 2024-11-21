import joi from "joi-oid";

const itinerarySchema = joi.object({
    namePerson: joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
        'string.base': 'Name must be a string',
    }),
    photoPerson: joi.string().required().messages({
        'string.empty': 'Photo is required',
        'any.required': 'Photo is required',
        'string.base': 'Photo must be a string',
    }),
    nameActivity: joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
        'string.base': 'Name must be a string',
    }),
    photoActivity: joi.string().required().messages({
        'string.empty': 'Photo is required',
        'any.required': 'Photo is required',
        'string.base': 'Photo must be a string',
    }),
    price: joi.number().required().messages({
        'number.empty': 'Price is required',
        'any.required': 'Price is required',
        'number.base': 'Price must be a number',
    }),
    duration: joi.number().required().messages({
        'number.empty': 'Duration is required',
        'any.required': 'Duration is required',
        'number.base': 'Duration must be a number',
    }),
    likes: joi.number().required().messages({
        'number.empty': 'Likes is required',
        'any.required': 'Likes is required',
        'number.base': 'Likes must be a number',
    }),
    hashtags: joi.array().required().messages({
        'array.empty': 'Hashtags is required',
        'any.required': 'Hashtags is required',
        'array.base': 'Hashtags must be an array',
    }),
    comments: joi.string().required().messages({
        'string.empty': 'Comments is required',
        'any.required': 'Comments is required',
        'string.base': 'Comments must be a string', 
    }),
    activities: joi.objectId().required().messages({
        'string.empty': 'Activities is required',
        'any.required': 'Activities is required',
        'string.base': 'Activities must be a string'
    })
});

export default itinerarySchema