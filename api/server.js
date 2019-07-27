const express = require("express");
// const mainRouter = require("../routers/mainRouter"); //import routers
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Welcome to Co-Make!");
});

// server.use("/api", mainRouter); list of routes

module.exports = server;
