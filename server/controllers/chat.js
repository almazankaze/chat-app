import mongoose from "mongoose";
import Group from "../models/chat.js";
import Message from "../models/message.js";
import AppError from "../utils/AppError.js";

export const createChat = async (req, res) => {
  const newChat = new Group({
    participants: [req.body.senderId, req.body.receiverId],
  });

  const result = await newChat.save();
  res.status(200).json(result);
};

export const userChats = async (req, res) => {
  const chat = await Group.find({
    participants: { $in: [req.params.userId] },
  });
  res.status(200).json(chat);
};

export const findChat = async (req, res) => {
  const chat = await Group.findOne({
    participants: { $all: [req.params.firstId, req.params.secondId] },
  });
  res.status(200).json(chat);
};

export const deleteChat = async (req, res) => {
  const { chatId } = req.body;

  await Group.findOneAndDelete(chatId);

  res.status(200).json({
    status: 200,
    _id: chatId,
    message: "Chat removed successfully",
  });
};

export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const group = await Group.findById(chatId);

  if (!group) throw new AppError(`No product with id ${chatId} found`, 404);

  const message = new Message({
    chatId,
    senderId,
    text,
  });

  group.messages.push(message);

  await message.save();
  await group.save();

  res.status(200).json(message);
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;

  const group = await Group.findById(chatId);

  if (!group) throw new AppError(`No product with id ${chatId} found`, 404);

  const result = await Group.findById(chatId).populate("messages");
  res.status(200).json(result);
};