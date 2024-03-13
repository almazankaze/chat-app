import mongoose from "mongoose";
import Message from "../models/message.js";
import AppError from "../utils/AppError.js";

export const createMessage = async (req, res) => {
  const comment = req.body.comment;
  const { id } = req.params;

  const message = new Message({ comment, sender: req.user._id, receiver: id });

  await message.save();

  const updatedMessage = await Message.findById(message._id).populate("sender");

  res.status(201).json(updatedMessage);
};
