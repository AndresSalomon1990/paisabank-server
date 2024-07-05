// External deps
import type { NextFunction, Request, Response } from "express";

// Internal deps
import { CustomError } from "../lib/custom-error.ts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const error = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  try {
    const message = JSON.parse(err.message);
    res.status(err.statusCode).json({ message });
  } catch (error) {
    res.status(err.statusCode).json({ message: err.message });
  }
};
