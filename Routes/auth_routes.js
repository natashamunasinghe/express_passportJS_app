const express = require("express");
const router  = express.Router();
const DigimonController = require("./../controllers/auth_controller");
const { celebrate, Joi } = require("celebrate");

router.get("/", AuthController.index);
