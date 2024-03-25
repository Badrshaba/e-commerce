import Joi from "joi";
import { Types } from "mongoose"
//============== object Id validator =============== //

const objectIdValidation = (value,helper)=>{
    const isvalid = Types.ObjectId.isValid(value)
    return isvalid ? value : helper.message('invalid objectId')
} 

//============== add sub-Category schema =============== //
 
export const addSubCategorySchema = {
    body: Joi.object({
        name: Joi.string(),
    }),
    params:Joi.object({
        categoryId: Joi.string().custom(objectIdValidation).required(),
    }),
}

//============== update sub-Category schema =============== //

export const updateSuCategorySchema = {
    body: Joi.object({
        name: Joi.string(),
        oldPublicId: Joi.string(),
    }),
    params:Joi.object({
        subCategoryId: Joi.string().custom(objectIdValidation).required(),
    }),
}

//============== delete sub-Category schema =============== //

export const deleteSubCategorySchema = {
    params:Joi.object({
        categoryId: Joi.string().custom(objectIdValidation).required(),
    }),
}