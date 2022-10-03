import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const server = express();

dotenv.config();

server.use(cors());
server.use(express.json());

server.get("/status", (req, res) => {
  res.send("Ok!");
});

server.listen(4000, () => console.log("Listening on port 4000"));
