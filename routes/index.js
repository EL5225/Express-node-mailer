import { Router } from "express";
import {
  getUsers,
  updateProfiles,
  register,
  login,
  authenticateUser,
  deleteUser,
  activateEmail,
} from "../controllers/index.js";
import { authenticated } from "../middlewares/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Hello! Welcome to API",
  });
});

// Auth
router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/authenticate", authenticated, authenticateUser);
router.post("/auth/activate-email", activateEmail);

// Users
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);

// Profiles
router.put("/profiles", authenticated, updateProfiles);

// Emails
router.get("/verify-email", (req, res) => {
  const { token } = req.query;
  res.render("template/verify-email", {
    token,
  });
});

export default router;
