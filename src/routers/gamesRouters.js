import express from "express";
import { getGames, createGame } from "../controllers/gamesControllers.js";

const router = express.Router();

router.get("/games", getGames);
router.post("/games", createGame);

export default router;
