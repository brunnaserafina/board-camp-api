import express from "express";
import { getRentals, createRental } from "../controllers/rentalsControllers.js";
import { validateRental } from "../middlewares/rentalsMiddleware.js";

const router = express.Router();

router.get("/rentals", getRentals);
router.post("/rentals", validateRental, createRental);

export default router;
