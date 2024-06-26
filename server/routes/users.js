import express from "express";
import passport from "passport";
import dotenv from "dotenv";

import {
  register,
  login,
  getUser,
  logout,
  deleteInvite,
} from "../controllers/users.js";

import catchAsync from "../utils/catchAsync.js";
import { isLoggedIn, validateUserInfo } from "../middlewares/users.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const userRouter = express.Router();

userRouter.post("/register", validateUserInfo, catchAsync(register));

userRouter.post(
  "/login",
  passport.authenticate("local", {
    failureMessage: true,
  }),
  catchAsync(login)
);

userRouter.get("/getUser", catchAsync(getUser));

userRouter.get("/logout", catchAsync(logout));

userRouter.post("/removeInvite", isLoggedIn, catchAsync(deleteInvite));

export default userRouter;
