import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";

//create express app and http server
const app = express();
const server = http.createServer(app);

//Middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());
app.use("api/status", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
  });
});
