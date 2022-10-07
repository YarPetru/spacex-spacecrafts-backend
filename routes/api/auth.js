const express = require("express");

const controller = require("../../controllers/auth");
const { controllerWrapper } = require("../../helpers");
const { validationBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  controllerWrapper(controller.register),
  controllerWrapper(controller.login)
);

router.post(
  "/login",
  validationBody(schemas.loginSchema),
  controllerWrapper(controller.login)
);

router.get("/logout", authenticate, controllerWrapper(controller.logout));

router.get("/current", authenticate, controllerWrapper(controller.current));

module.exports = router;
