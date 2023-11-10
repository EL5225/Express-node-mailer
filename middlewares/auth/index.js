import jwt from "jsonwebtoken";
import { prisma } from "../../libs/index.js";
const { JWT_SECRET_KEY } = process.env;

export const authenticated = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized",
      error: "missing token",
    });
  }

  jwt.verify(authorization, JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
        error: err.message,
      });
    }

    req.user = await prisma.users.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        Profile: true,
      },
    });
    next();
  });
};
