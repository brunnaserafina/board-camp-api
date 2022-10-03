import express from "express";
import { getGames, createGame } from "../controllers/gamesControllers.js";
import { validateGame } from "../middlewares/gamesMiddleware.js";

const router = express.Router();

router.get("/games", getGames);
router.post("/games", validateGame, createGame);

export default router;
