import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const userSocketMap = {};

export const getSocketId = (userId) => {
  return userSocketMap[userId];
};

io.on("connection", (socket) => {
  const roomId = socket.handshake.query.roomId;
  const userId = socket.handshake.query.userId;

  if (userId != "undefined") userSocketMap[userId] = socket.id;

  socket.on("join room", (room) => {
    socket.join(room);
  });

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    socket.leave(roomId);
  });
});

export { app, io, server };
