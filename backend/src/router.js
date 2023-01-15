const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");
const {
  getUserByEmailMiddleWare,
  register,
} = require("./controllers/authControllers");

// Public routes
// Auth
router.post("/api/register", hashPassword, register);
router.post("/api/login", getUserByEmailMiddleWare, verifyPassword);

// Private routes
const usersControllers = require("./controllers/usersControllers");

router.get("/api/profile", verifyToken, usersControllers.getMyProfile);

const articlesControllers = require("./controllers/articlesControllers");

router.get("/api/articles", articlesControllers.browse);
router.get("/api/articles/:id", articlesControllers.read);
router.put("/api/articles/:id", articlesControllers.edit);
router.post("/api/articles", articlesControllers.add);
router.delete("/api/articles/:id", articlesControllers.destroy);

module.exports = router;
