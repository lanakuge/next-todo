import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export const verifyToken = handler => async (req, res) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (token == null) {
    res.status(401).send("Unauthorized");
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.username = decoded.username;
    return handler(req, res);
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(403).json({ status: false, message: "Token expired" });
    }
    if (error instanceof JsonWebTokenError) {
      return res.status(403).json({ status: false, message: "Invalid token" });
    }
    res.status(403).json({ error: `${error}` });
  }
};
