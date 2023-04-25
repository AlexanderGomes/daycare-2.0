const express = require("express");
const router = express.Router();

const { Register, Login } = require("../controllers/auth");

router.post("/", Register);
router.post("/signin", Login);

module.exports = router;
