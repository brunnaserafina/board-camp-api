import express from "express";
import {
  getCategories,
  postCategories,
} from "../controllers/categoriesControllers.js";
import { validateCategory } from "../middlewares/categoriesMiddleware.js";

const router = express.Router();

router.get("/categories", getCategories);
router.post("/categories", validateCategory, postCategories);

export default router;
