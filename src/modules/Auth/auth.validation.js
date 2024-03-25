import Joi from "joi";
import { systemRoles } from "../../utils/system-roles.js";


export const signUpSchema = {
  body: Joi.object({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    age: Joi.number().min(18).max(100).required(),
    role: Joi.string()
      .valid(systemRoles.ADMIN, systemRoles.USER, systemRoles.SUPER_ADMIN),
    phoneNumbers: Joi.array(),
    addresses: Joi.array(),
  }),
};

export const signInSchema = {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    }),
};

export const forgetPasswordSchema = {
    body: Joi.object({
      email: Joi.string().email().required(),
    }),
};

export const resetPasswordSchema = {
    body: Joi.object({
        newPAssword:Joi.string().min(8).required(),
    }),
};

export const updatePasswordSchema = {
    body: Joi.object({
        oldPAssword:Joi.string().min(8).required(),
        newPAssword:Joi.string().min(8).required(),
    }),
};