import Joi from "joi";
import { Types } from "mongoose"
//============== object Id validator =============== //

const objectIdValidation = (value,helper)=>{
    const isvalid = Types.ObjectId.isValid(value)
    return isvalid ? value : helper.message('invalid objectId')
} 

//============== add brand schema =============== //

export const addBrandSchema = {
    body: Joi.object({
        name: Joi.string().min(3).max(20),
    }),
    query:Joi.object({
        categoryId: Joi.string().custom(objectIdValidation).required(),
        subCategoryId: Joi.string().custom(objectIdValidation).required(),
    }),
}
 
//============== update brand schema =============== //

export const updateBrandSchema = {
    body: Joi.object({
        name: Joi.string(),
        oldPublicId: Joi.string(),
    }),
    params:Joi.object({
        brandId: Joi.string().custom(objectIdValidation).required(),
    }),
}

//============== delete brand schema =============== //

export const deleteBrandSchema = {
    params:Joi.object({
        brandId: Joi.string().custom(objectIdValidation).required(),
    }),
}