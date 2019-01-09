const express = require("express");
const router  = express.Router();
const authRoutes = require("./auth_routes");

//localhost:3000/digimon  -shows "hurrah!"
router.use("/auth", authRoutes);

module.exports = router;