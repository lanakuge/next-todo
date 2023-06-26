import { verifyToken } from "@/middleware/verifyToken";
import { PrismaClient } from "@prisma/client";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function handler(req, res) {
  try {
    const refreshToken = cookie.parse(req.headers.cookie).refreshToken;
    // method check
    if (req.method !== "POST")
      return res
        .status(405)
        .json({ status: false, message: "Method not allowed" });

    const user = await jwt.decode(refreshToken);

    // query data
    const data = await prisma.taskList.findMany({
      where: {
        userId: user.id,
      },
    });

    if (data.length === 0)
      return res
        .status(200)
        .json({ status: true, message: "Task list not found", data: null });

    res.status(200).json({ status: true, message: "Task list found", data });
  } catch (error) {
    if (error instanceof TypeError)
      return res
        .status(400)
        .json({ status: true, message: "Cookie not available" });

    return res.status(500).json({
      status: false,
      message: "Internal server error!",
      error: `${error}`,
    });
  }
}

export default handler;
