import express from "express";
const router = express.Router();
import { UpdateUser, forgetPassword, getUser,login, register, resetPassword } from "../controllers/user.controllers.js";


router.post("/register", register);
router.post("/login",login);
router.get("/:id", getUser);
router.post("/forgotPassword", forgetPassword);
router.put("/resetPassword/:token", resetPassword);
router.put("/updateProfile/:id", UpdateUser);






export default router;
