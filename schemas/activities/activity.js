import joi from 'joi-oid'

const activitySchema = joi.object({
    name: joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
        'string.base': 'Name must be a string',
    }),
    photo: joi.string().required().messages({
        'string.empty': 'Photo is required',
        'any.required': 'Photo is required',
        'string.base': 'Photo must be a string',
    })
})

export default activitySchema