import { verifyToken } from "@/middleware/verifyToken";
import { PrismaClient } from "@prisma/client";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function handler(req, res) {
  const { name } = req.body;
  const refreshToken = cookie.parse(req.headers.cookie).refreshToken;

  const user = await jwt.decode(refreshToken);

  try {
    // method check
    if (req.method !== "POST")
      return res
        .status(405)
        .json({ status: false, message: "Method not allowed" });

    // create task list
    const data = await prisma.taskList.create({
      data: {
        name,
        userId: user.id,
      },
    });

    res.status(201).json({ status: true, message: "Task list created", data });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error!",
      error: `${error}`,
    });
  }
}

export default verifyToken(handler);
