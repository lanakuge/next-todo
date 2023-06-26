import { verifyToken } from "@/middleware/verifyToken";

export function handler(req, res) {
  try {
    if (req.method !== "POST")
      return res
        .status(405)
        .json({ status: false, message: "Method not allowed" });

    res.status(200).json({ message: "Protected route" });
  } catch (error) {
    console.log(error);
  }
}

export default verifyToken(handler);
