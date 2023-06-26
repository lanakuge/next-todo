import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(req, res) {
  const { taskListId } = req.body;

  try {
    // method check
    if (req.method !== "POST")
      return res
        .status(405)
        .json({ status: false, message: "Method not allowed" });

    // task list check
    const task = await prisma.taskList.findMany({
      where: {
        id: taskListId,
      },
    });

    if (task.length === 0)
      return res.status(400).json({
        status: true,
        message: "Invalid task id",
      });

    // query data
    const data = await prisma.task.findMany({
      where: {
        taskListId,
      },
    });

    if (data.length === 0)
      return res
        .status(200)
        .json({ status: true, message: "Task not found", data: null });

    res.status(200).json({
      status: true,
      message: "Tasks found",
      length: data.length,
      data,
    });
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
