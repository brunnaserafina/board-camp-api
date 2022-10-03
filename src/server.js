import express from "express";
import cors from "cors";

import router from "./routes/categoriesRouters.js";

const server = express();

server.use(cors());
server.use(express.json());

server.use(router);

server.get("/status", (req, res) => {
  res.send("Ok!");
});

server.listen(4000, () => console.log("Listening on port 4000"));
