const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
} = require("./services/auth");
const {
  getUserByEmailMiddleWare,
  register,
} = require("./controllers/authControllers");

// Public routes
// Auth
router.post("/api/register", hashPassword, register);
router.post("/api/login", getUserByEmailMiddleWare, verifyPassword);
router.get("/api/logout", verifyToken, logout);

const articlesControllers = require("./controllers/articlesControllers");

router.get("/api/articles", articlesControllers.browse);
router.get("/api/articles/:id", articlesControllers.read);
router.put("/api/articles/:id", articlesControllers.edit);
router.post("/api/articles", articlesControllers.add);
router.delete("/api/articles/:id", articlesControllers.destroy);

// Private routes
const usersControllers = require("./controllers/usersControllers");

router.get("/api/profile", verifyToken, usersControllers.profile);

module.exports = router;
