import mongoose from "mongoose";
import Group from "../models/chat.js";
import Message from "../models/message.js";
import User from "../models/user.js";
import AppError from "../utils/AppError.js";
import { io, getSocketId } from "../socket/socket.js";

export const createChat = async (req, res) => {
  const { name, senderId, receiverId } = req.body;
  let newChat;

  if (receiverId === null) {
    newChat = new Group({
      name: name,
      creator: senderId,
      participants: [senderId],
    });
  } else {
    newChat = new Group({
      name: name,
      creator: senderId,
      participants: [senderId, receiverId],
    });
  }

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

export const inviteChat = async (req, res) => {
  const { chatId, receiverEmail } = req.body;

  const receiver = await User.findOne({ email: receiverEmail });

  if (!receiver)
    throw new AppError(`No product with id ${receiverEmail} found`, 404);

  const hasInvite = receiver.invites.includes(chatId);

  if (!hasInvite) {
    receiver.invites.push(chatId);
    await receiver.save();
  }

  res.status(200).json({ done: true });
};

export const acceptInvite = async (req, res, next) => {
  const { chatId } = req.body;

  const group = await Group.findById(chatId);

  if (!group) throw new AppError(`No product with id ${chatId} found`, 404);

  const isInGroup = group.participants.includes(req.user._id);

  if (!isInGroup) {
    group.participants.push(req.user._id);
    await group.save();
  }

  res.status(200).json({ done: true });
};

export const removeFromChat = async (req, res, next) => {
  const { userId, chatId } = req.body;

  const group = await Group.findById(chatId);

  if (!group) throw new AppError(`No product with id ${chatId} found`, 404);

  const newPart = group.participants.filter((user) => !user.equals(userId));

  group.participants = newPart;
  group.save();

  res.status(200).json({ done: true });
};

export const addMessage = async (req, res) => {
  const { chatId, senderId, text, senderName } = req.body;

  const group = await Group.findById(chatId);

  if (!group) throw new AppError(`No product with id ${chatId} found`, 404);

  const message = new Message({
    chatId,
    senderId,
    text,
    senderName,
  });

  group.messages.push(message);

  await message.save();
  await group.save();

  const result = await Group.findById(chatId).populate("messages");

  const socketId = getSocketId(senderId);

  io.in(chatId).emit("newMessage", message);

  res.status(200).json(result);
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;

  const group = await Group.findById(chatId);

  if (!group) throw new AppError(`No product with id ${chatId} found`, 404);

  const result = await Group.findById(chatId).populate("messages");
  res.status(200).json(result);
};
