
import { Router } from "express";
import * as authController from './auth.controller.js';
import expressAsyncHandler from "express-async-handler";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { forgetPasswordSchema, resetPasswordSchema, signInSchema, signUpSchema, updatePasswordSchema } from "./auth.validation.js";
const router = Router();


router.post('/',validationMiddleware(signUpSchema), expressAsyncHandler(authController.signUp))
router.get('/verify-email', expressAsyncHandler(authController.verifyEmail))


router.post('/login',validationMiddleware(signInSchema), expressAsyncHandler(authController.signIn))
router.post('/forgetPassword',validationMiddleware(forgetPasswordSchema), expressAsyncHandler(authController.forgetPassword))
router.post('/resetPassword',validationMiddleware(resetPasswordSchema), expressAsyncHandler(authController.resetPassword))
router.patch('/',validationMiddleware(updatePasswordSchema), expressAsyncHandler(authController.updatePassword))



export default router;