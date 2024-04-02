import mongoose from "mongoose";
import Message from "../models/message.js";
import Group from "../models/chat.js";
import AppError from "../utils/AppError.js";

export const validateMessage = (req, res, next) => {
  next();
};

export const isMember = (req, res, next) => {
  next();
};

export const canInvite = async (req, res, next) => {
  const { chatId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(chatId))
    throw new AppError(`No product with id ${chatId} found`, 404);

  const group = await Group.findById(chatId);

  if (!group) throw new AppError(`No product with id ${chatId} found`, 404);

  if (!group.creator.equals(req.user._id)) {
    const msg = "unauthorized to invite";
    throw new AppError(msg, 401);
  } else {
    next();
  }
};
