// External deps
import { Router } from "express";

// Internal deps
import { validateToken } from "../middlewares/validate-token.js";
import { getAllCards } from "../controllers/cards.js";

const cardsRouter = Router();

/*
  path: /paisabank
*/

cardsRouter.get("/cards", validateToken, getAllCards);

export default cardsRouter;
