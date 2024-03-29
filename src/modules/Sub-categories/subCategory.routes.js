import { Router } from "express";
const router = Router();
import * as subCategoryController from "./subCategory.controller.js";
import expressAsyncHandler from "express-async-handler";
import { multerMiddleHost } from "../../middlewares/multer.js";
import { endPointsRoles } from "../Category/category.endpoints.js";
import { auth } from "../../middlewares/auth.middleware.js";
import { allowedExtensions } from "../../utils/allowed-extensions.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { addSubCategorySchema, deleteSubCategorySchema, updateSuCategorySchema } from "./subCategory.validation.js";

router.post(
  "/:categoryId",
  auth(endPointsRoles.ADD_CATEGORY),
  multerMiddleHost({
    extensions: allowedExtensions.image,
  }).single("image"),
  validationMiddleware(addSubCategorySchema),
  expressAsyncHandler(subCategoryController.addSubCategory)
);

router.put(
  "/:subCategoryId",
  auth(endPointsRoles.ADD_CATEGORY),
  multerMiddleHost({
    extensions: allowedExtensions.image,
  }).single("image"),
  validationMiddleware(updateSuCategorySchema),
  expressAsyncHandler(subCategoryController.updateSubCategory)
);

router.get(
  "/getAllSubCategoriesWithBrand",
  auth(endPointsRoles.ADD_CATEGORY),
  expressAsyncHandler(subCategoryController.getAllSubCategoriesWithBrand)
);
router.get(
  "/getAllSubCategoriesForCategory",
  auth(endPointsRoles.ADD_CATEGORY),
  expressAsyncHandler(subCategoryController.getAllSubCategoriesForCategory)
);
router.get(
  "/getSubCategoryBiId",
  auth(endPointsRoles.ADD_CATEGORY),
  expressAsyncHandler(subCategoryController.getSubCategoryBId)
);
router.delete(
  "/:subCategoryId",
  auth(endPointsRoles.ADD_CATEGORY),
  validationMiddleware(deleteSubCategorySchema),
  expressAsyncHandler(subCategoryController.deleteSubCategory)
);

export default router;
