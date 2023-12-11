import { Router } from "express";
import { login, register } from "../controllers/athu.controllers.js";
import { body } from "express-validator";
const router = Router();

router.post(
  "/register",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Formato de password incorrecto")
      .trim()
      .isLength({ min: 6 })
      .custom((value, { req }) => {
        if (value !== req.body.repassword) {
          throw new Error("no hay coincidencias");
        }
        return value;
      }),
  ],
  register
);

router.post("/login", login);

export default router;
