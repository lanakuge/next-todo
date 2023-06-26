import { verifyToken } from "@/middleware/verifyToken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(req, res) {
  const { id, name, desc, priority, deadline, tags, color, finished } =
    req.body;

  try {
    // method check
    if (req.method !== "PUT")
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

    // update task list
    const data = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        name,
        desc,
        priority,
        deadline,
        tags,
        color,
        finished,
      },
    });

    res
      .status(200)
      .json({ status: true, message: "Task has been updated", data });
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
