import express from "express";
import {
  getRentals,
  createRental,
  deleteRental,
} from "../controllers/rentalsControllers.js";
import { validateRental } from "../middlewares/rentalsMiddleware.js";

const router = express.Router();

router.get("/rentals", getRentals);
router.post("/rentals", validateRental, createRental);
router.delete("/rentals/:id", deleteRental);

export default router;
