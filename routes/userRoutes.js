const express = require("express");
const { registredUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registredUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
