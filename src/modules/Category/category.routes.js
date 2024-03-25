import { Router } from "express";
const router = Router();
import * as categoryController from "./category.contoller.js";
import expressAsyncHandler from "express-async-handler";
import { multerMiddleHost } from "../../middlewares/multer.js";
import { endPointsRoles } from "./category.endpoints.js";
import { auth } from "../../middlewares/auth.middleware.js";
import { allowedExtensions } from "../../utils/allowed-extensions.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { addCategorySchema, deleteCategorySchema, updateCategorySchema } from "./category.validation.js";

router.post(
  "/",
  auth(endPointsRoles.ADD_CATEGORY),
  multerMiddleHost({
    extensions: allowedExtensions.image,
  }).single("image"),
  validationMiddleware(addCategorySchema),
  expressAsyncHandler(categoryController.addCategory)
);

router.put(
  "/:categoryId",
  auth(endPointsRoles.UPDATE_CATEGORY),
  multerMiddleHost({
    extensions: allowedExtensions.image,
  }).single("image"),
  validationMiddleware(updateCategorySchema),
  expressAsyncHandler(categoryController.updateCategory)
);

router.get("/", expressAsyncHandler(categoryController.getAllCategories));


router.delete('/:categoryId',
    auth(endPointsRoles.ADD_CATEGORY),
    validationMiddleware(deleteCategorySchema),
    expressAsyncHandler(categoryController.deleteCategory))
export default router;