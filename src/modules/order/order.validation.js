// import Joi from "joi";
// import { Types } from "mongoose"
// //============== object Id validator =============== //

// const objectIdValidation = (value,helper)=>{
//     const isvalid = Types.ObjectId.isValid(value)
//     return isvalid ? value : helper.message('invalid objectId')
// } 


// //============== createOrder schema =============== //

// export const createOrderSchema = {
//     body:Joi.object({
//         product: Joi.string().custom(objectIdValidation).required(),
//         quantity: Joi.number().required(),
//         couponCode: Joi.string().required(),
//         paymentMethod: Joi.string().custom(objectIdValidation).required(),
//         phoneNumbers: Joi.string().custom(objectIdValidation).required(),
//         address: Joi.string().custom(objectIdValidation).required(),
//         city: Joi.string().custom(objectIdValidation).required(),
//         postalCode: Joi.string().custom(objectIdValidation).required(),
//         country: Joi.string().custom(objectIdValidation).required(),
//     }),
// }
 
// //============== removeFromcart schema =============== //

// export const removeFromcartSchema = {
//     query:Joi.object({
//         productId: Joi.string().custom(objectIdValidation).required(),
//     }),
// }

