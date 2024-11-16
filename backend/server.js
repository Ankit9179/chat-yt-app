import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import cookieParser from "cookie-parser";
// import { v2 as cloudinary } from "cloudinary";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/users.routes.js";
import vlogRoutes from "./routes/vlog.routes.js";
import { app, server } from "./socket/socket.js";
app.use(
  cors({
    origin: "https://caht-app-ld.onrender.com", // specify the frontend origin
    credentials: true, // allow cookies or other credentials
  })
);

import mongoDbConnections from "./db/connectToDatabase.js";

const port = process.env.PORT || 5000;

dotenv.config();
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

const __dirname = path.resolve(); // it will gives acctual path of root dir name.

app.use(express.json()); // for parse the incommig request with json payload (from request.body)
app.use(cookieParser()); //it will be use brfore run all routes

//path  \\ routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);
//
app.use("/api/vlog/", vlogRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//   //root rout
//   res.send("hello world");
// });

server.listen(port, () => {
  mongoDbConnections();
  console.log(`server is running on port ${port}`);
});
