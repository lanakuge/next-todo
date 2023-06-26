import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import cookie from "cookie";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    // method check
    if (req.method !== "POST")
      return res
        .status(405)
        .json({ status: false, message: "Method not allowed" });

    // email validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: false,
        message: "Invalid email format!",
      });
    }

    // email check
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!data)
      return res
        .status(404)
        .json({ status: false, message: "Email not found!" });

    // password match
    const match = await bcrypt.compare(password, data.password);
    if (!match)
      return res
        .status(400)
        .json({ status: false, message: "Wrong password!" });

    // sign jwt
    const accessToken = jwt.sign(
      {
        id: data.id,
        name: data.name,
        email: data.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );

    const refreshToken = jwt.sign(
      {
        id: data.id,
        name: data.name,
        email: data.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        refreshToken,
      },
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
      })
    );
    res.json({ accessToken });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error!",
      error: `${error}`,
    });
  }
}
