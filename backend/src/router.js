const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword } = require("./services/auth");
const {
  getUserByEmailMiddleWare,
  register,
} = require("./controllers/authControllers");

// Public routes
// Auth
router.post("/api/register", hashPassword, register);
router.post("/api/login", getUserByEmailMiddleWare, verifyPassword);

// Private routes
const itemControllers = require("./controllers/articlesControllers");

router.get("/api/items", itemControllers.browse);
router.get("/api/items/:id", itemControllers.read);
router.put("/api/items/:id", itemControllers.edit);
router.post("/api/items", itemControllers.add);
router.delete("/api/items/:id", itemControllers.destroy);

module.exports = router;
