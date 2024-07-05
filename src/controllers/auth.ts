// External deps
import type { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { eq } from "drizzle-orm";

// Internal deps
import { db } from "../db/db.ts";
import { UsersTable } from "../db/schemas/users.ts";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Verify if email exists
    const emailExists = await db.select().from(UsersTable).where(eq(UsersTable.email, email));

    if (emailExists.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
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
      msg: "500 - Internal Server Error",
    });
  }
};
