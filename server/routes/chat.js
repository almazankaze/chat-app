import express from "express";

import {
  createChat,
  deleteChat,
  findChat,
  userChats,
  addMessage,
  getMessages,
  inviteChat,
  acceptInvite,
} from "../controllers/chat.js";
import { isLoggedIn } from "../middlewares/users.js";
import { canInvite } from "../middlewares/messages.js";
import catchAsync from "../utils/catchAsync.js";

const chatRouter = express.Router({ mergeParams: true });

chatRouter.post("/", isLoggedIn, catchAsync(createChat));
chatRouter.delete("/", isLoggedIn, catchAsync(deleteChat));
chatRouter.get("/:userId", isLoggedIn, catchAsync(userChats));
chatRouter.get("/find/:firstId/:secondId", isLoggedIn, catchAsync(findChat));
chatRouter.post(
  "/invite",
  isLoggedIn,
  catchAsync(canInvite),
  catchAsync(inviteChat)
);
chatRouter.post("/acceptInvite", isLoggedIn, catchAsync(acceptInvite));

chatRouter.post("/messages/addMessage", isLoggedIn, catchAsync(addMessage));
chatRouter.get("/messages/:chatId", isLoggedIn, catchAsync(getMessages));

export default chatRouter;
