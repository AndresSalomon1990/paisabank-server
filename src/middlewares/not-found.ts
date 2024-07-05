// External deps
import type { Response, Request, NextFunction } from "express";

// Internal deps
import { CustomError } from "../lib/custom-error.ts";

export function notFound(_req: Request, _res: Response, next: NextFunction) {
  return next(new CustomError("Route not found", 404));
}
