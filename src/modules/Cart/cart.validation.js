import Joi from "joi";
import { Types } from "mongoose"
//============== object Id validator =============== //

const objectIdValidation = (value,helper)=>{
    const isvalid = Types.ObjectId.isValid(value)
    return isvalid ? value : helper.message('invalid objectId')
} 
//============== addToCart schema =============== //

export const addToCartSchema = {
    query:Joi.object({
        productId: Joi.string().custom(objectIdValidation).required(),
        quantity: Joi.number().required(),
    }),
}
 
//============== removeFromcart schema =============== //

export const removeFromcartSchema = {
    query:Joi.object({
        productId: Joi.string().custom(objectIdValidation).required(),
    }),
}

