import express from "express";
import { getRentals } from "../controllers/rentalsControllers.js";

const router = express.Router();

router.get("/rentals", getRentals);

export default router;
