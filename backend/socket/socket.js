import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express(); //creating app express object
const server = http.createServer(app); //express server with http module
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
  },
}); //io server which wrap express server

const userSocketMap = {}; // {userId:socketId} , it will store ids of loggedin user

//connection io
io.on("connection", (socket) => {
  console.log("user conncted with io ", socket.id);

  //getting loggedin user id
  const userId = socket.handshake.query.userId;

  //it means there is id which has provided by logged in user
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  //io.emit( ) is used to listen to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //disconnect ,socket.on() is used to listen to the events ,can be used both client and server side
  socket.on("disconnect", () => {
    console.log("user disconnect", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
