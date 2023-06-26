import { verifyToken } from "@/middleware/verifyToken";
import { PrismaClient } from "@prisma/client";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function handler(req, res) {
  const { id } = req.body;

  try {
    // method check
    if (req.method !== "PATCH")
      return res
        .status(405)
        .json({ status: false, message: "Method not allowed" });

    // task list check
    const available = await prisma.taskList.findMany({
      where: {
        id,
      },
    });
    if (available.length === 0)
      return res
        .status(400)
        .json({ status: true, message: "Can't find task list" });

    // delete task list
    const data = await prisma.taskList.delete({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .json({ status: true, message: "Task list has been deleted", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error!",
      id: id ? id : "No id",
      error: `${error}`,
    });
  }
}

export default verifyToken(handler);
