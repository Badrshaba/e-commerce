import { Router } from "express";
import * as Cc from "./cart.controller.js"
import expressAsyncHandler from "express-async-handler";
import { auth } from "../../middlewares/auth.middleware.js";
import { systemRoles } from "../../utils/system-roles.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { addToCartSchema, removeFromcartSchema } from "./cart.validation.js";

const router = Router()







router.post("/" , auth([systemRoles.USER]) ,validationMiddleware(addToCartSchema) , expressAsyncHandler(Cc.addToCart))
router.put("/" , auth([systemRoles.USER]) ,validationMiddleware(removeFromcartSchema) , expressAsyncHandler(Cc.removeFromcart))





 






export default router ;