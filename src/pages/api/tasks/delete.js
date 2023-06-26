import { verifyToken } from "@/middleware/verifyToken";
import { PrismaClient } from "@prisma/client";

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
    const available = await prisma.task.findMany({
      where: {
        id,
      },
    });
    if (available.length === 0)
      return res.status(400).json({ status: true, message: "Can't find task" });

    // delete task list
    const data = await prisma.task.delete({
      where: {
        id,
      },
    });

    res
      .status(200)
      .json({ status: true, message: "Task has been deleted", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error!",
      error: `${error}`,
    });
  }
}

export default verifyToken(handler);
