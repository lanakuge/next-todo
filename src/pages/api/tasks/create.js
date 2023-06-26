import { verifyToken } from "@/middleware/verifyToken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(req, res) {
  const { taskListId, name, desc, priority, deadline, tags, color } = req.body;

  try {
    // method check
    if (req.method !== "POST")
      return res
        .status(405)
        .json({ status: false, message: "Method not allowed" });

    // task list check
    const taskList = await prisma.taskList.findMany({
      where: {
        id: taskListId,
      },
    });

    if (taskList.length === 0)
      return res.status(400).json({
        status: true,
        message: "Invalid task list id",
      });

    // create task list
    const data = await prisma.task.create({
      data: {
        taskListId,
        name,
        desc,
        priority,
        deadline,
        tags,
        color: color ? color : "#444444",
      },
    });

    res.status(201).json({ status: true, message: "Task created", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error!",
      error: `${error}`,
    });
  }
}
// export default handler;
export default verifyToken(handler);
