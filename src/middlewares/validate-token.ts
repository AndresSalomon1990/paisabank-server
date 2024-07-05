// External deps
import type { Request, Response, NextFunction } from "express";

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized | No token provided",
    });
  }

  next();
};
