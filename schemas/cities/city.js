import joi from "joi-oid";

const citySchema = joi.object({
    name: joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
        'string.base': 'Name must be a string',
    }), 
    photo: joi.string().required().messages({
        'string.empty': 'Photo is required',
        'any.required': 'Photo is required',
        'string.base': 'Photo must be a string',
    }), 
    country: joi.string().required().messages({
        'string.empty': 'Country is required',
        'any.required': 'Country is required',
        'string.base': 'Country must be a string',
    }), 
    continent: joi.string().required().messages({
        'string.empty': 'Continent is required',
        'any.required': 'Continent is required',
        'string.base': 'Continent must be a string',
    }), 
    description: joi.string().required().messages({
        'string.empty': 'Description is required',
        'any.required': 'Description is required',
        'string.base': 'Description must be a string',
    }), 
    badge: joi.string().required().messages({
        'string.empty': 'Badge is required',
        'any.required': 'Badge is required',
        'string.base': 'Badge must be a string',
    }),
    itinerary: joi.objectId().required().messages({
        'string.empty': 'Itinerary is required',
        'any.required': 'Itinerary is required',
        'string.base': 'Itinerary must be a string'
    })
})

export default citySchema