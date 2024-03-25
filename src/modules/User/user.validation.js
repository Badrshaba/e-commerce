import Joi from "joi"
import { Types } from "mongoose"
import { systemRoles } from "../../utils/system-roles.js"

//============== object Id validator =============== //

const objectIdValidation = (value,helper)=>{
    const isvalid = Types.ObjectId.isValid(value)
    return isvalid ? value : helper.message('invalid objectId')
} 

//============== update user schema =============== //

export const updateUserSchema = {
    body: Joi.object({
        username: Joi.string().min(3).max(20),
        email: Joi.string().email(),
        age: Joi.number().min(18).max(100),
        addresses: Joi.array(),
        phoneNumbers: Joi.array() ,
        role:Joi.string().valid(systemRoles.USER,systemRoles.ADMIN,systemRoles.SUPER_ADMIN) 
    })
}




