import express from "express";
import cors from "cors";

import categoriesRouters from "./routers/categoriesRouters.js";
import gamesRouters from "./routers/gamesRouters.js";
import customersRouters from "./routers/customersRouters.js";
import rentalsRouters from "./routers/rentalsRouters.js";

const server = express();

server.use(cors());
server.use(express.json());

server.use(categoriesRouters);
server.use(gamesRouters);
server.use(customersRouters);
server.use(rentalsRouters);


server.listen(4000, () => console.log("Listening on port 4000"));
