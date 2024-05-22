import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/users.routes.js";
import { app, server } from "./socket/socket.js";

import mongoDbConnections from "./db/connectToDatabase.js";

const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // for parse the incommig request with json payload (from request.body)
app.use(cookieParser()); //it will be use brfore run all routes

//path  \\ routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

// app.get("/", (req, res) => {
//   //root rout
//   res.send("hello world");
// });

server.listen(port, () => {
  mongoDbConnections();
  console.log(`server is running on port ${port}`);
});
