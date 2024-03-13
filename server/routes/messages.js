import express from "express";

import { createMessage } from "../controllers/messages.js";
import { validateMessage } from "../middlewares/messages.js";
import { isLoggedIn } from "../middlewares/users.js";
import catchAsync from "../utils/catchAsync.js";

const messagesRouter = express.Router({ mergeParams: true });

messagesRouter.post(
  "/send/:id",
  isLoggedIn,
  validateMessage,
  catchAsync(createMessage)
);

export default messagesRouter;
