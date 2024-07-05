// External deps
import { Router } from "express";
import { check } from "express-validator";

// Internal deps
import { validateFields } from "../middlewares/validate-fields.ts";
import { createUser } from "../controllers/auth.ts";

const authRouter = Router();

/*
  path: /api/auth
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

export default authRouter;
