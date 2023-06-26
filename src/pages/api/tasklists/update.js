import { verifyToken } from "@/middleware/verifyToken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(req, res) {
  const { id, name } = req.body;

  try {
    // method check
    if (req.method !== "PUT")
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

    // update task list
    const data = await prisma.taskList.update({
      where: {
        id: id,
      },
      data: {
        name,
      },
    });

    res
      .status(200)
      .json({ status: true, message: "Task list has been updated", data });
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
