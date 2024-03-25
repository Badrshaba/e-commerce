import Joi from "joi";
import { Types } from "mongoose"
//============== object Id validator =============== //

const objectIdValidation = (value,helper)=>{
    const isvalid = Types.ObjectId.isValid(value)
    return isvalid ? value : helper.message('invalid objectId')
} 

//============== add Category schema =============== //

export const addCategorySchema = {
    body: Joi.object({
        name: Joi.string(),
    })
}

//============== update Category schema =============== //

export const updateCategorySchema = {
    body: Joi.object({
        name: Joi.string(),
        oldPublicId: Joi.string(),
    }),
    params:Joi.object({
        categoryId: Joi.string().custom(objectIdValidation).required(),
    }),
}

//============== delete Category schema =============== //

export const deleteCategorySchema = {
    params:Joi.object({
        categoryId: Joi.string().custom(objectIdValidation).required(),
    }),
}