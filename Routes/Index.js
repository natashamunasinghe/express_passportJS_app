const express = require("express");
const router  = express.Router();
const homepage = require("./homepage");
const authRoutes = require("./auth_routes");


//homepage route
router.use("/", homepage);

//auth routes
router.use("/auth", authRoutes);


module.exports = router;