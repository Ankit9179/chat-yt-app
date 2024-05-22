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

//connection io
io.on("connection", (socket) => {
  console.log("user conncted with io ", socket.id);

  //disconnect ,socket.on() is used to listen to the events ,can be used both client and server side
  socket.on("disconnect", () => {
    console.log("user disconnect", socket.id);
  });
});

export { app, io, server };
