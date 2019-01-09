const express = require("express");
const router  = express.Router();
// const AuthController = require("../controllers/auth_controller");
// const { celebrate, Joi } = require("celebrate");

// Home page route
router.get('/', (req, res) => 
    res.send('home page'));

// Auth routes
router.get('/login', (req, res) => 
    res.send('home page'));

module.exports = router;