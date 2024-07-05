// External deps
import { Router } from "express";

// Internal deps
import { validateToken } from "../middlewares/validate-token.ts";
import { getAllCards } from "../controllers/cards.ts";

const cardsRouter = Router();

/*
  path: /api/cards
*/

cardsRouter.get("/", validateToken, getAllCards);

export default cardsRouter;