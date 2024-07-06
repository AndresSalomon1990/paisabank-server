// External deps
import type { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { eq } from "drizzle-orm";

// Internal deps
import { db } from "../db/db.js";
import { generateToken } from "../lib/token.js";
import { UsersTable } from "../db/schemas/users.js";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Verify if email exists
    const emailExists = await db.select().from(UsersTable).where(eq(UsersTable.email, email));

    if (emailExists.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Bad Request | Email already exists",
      });
    }

    // Hash password
    const salt = bcryptjs.genSaltSync();
    const hashedPassword = bcryptjs.hashSync(password, salt);

    // Create user
    const user = await db
      .insert(UsersTable)
      .values({ name, email, password: hashedPassword })
      .returning();

    return res.status(201).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error | Failed to create user",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verify if email exists
    const user = await db.select().from(UsersTable).where(eq(UsersTable.email, email));

    if (user.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Not Found | Email not found",
      });
    }

    // Verify password
    const validPassword = bcryptjs.compareSync(password, user[0].password);
    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Bad Request | Invalid password",
      });
    }

    // Generate token
    const token = generateToken(user[0].id);

    return res.status(200).json({
      success: true,
      data: {
        name: user[0].name,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error | Failed to login",
    });
  }
};
