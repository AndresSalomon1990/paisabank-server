// External deps
import { Router } from "express";
import { check } from "express-validator";

// Internal deps
import { validateFields } from "../middlewares/validate-fields.js";
import { createUser, login } from "../controllers/auth.js";

const authRouter = Router();

/*
  path: /paisabank
*/

authRouter.post(
  "/create-user",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ],
  createUser,
);

authRouter.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ],
  login,
);

export default authRouter;
