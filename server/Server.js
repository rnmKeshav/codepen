import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import ServerLayout from "./ServerLayout";

const server_port = 3000;
const server = express();


server.use("/js",express.static("assets/js"));
server.use("/css",  (req, res, next) => {setTimeout(function () {next()}, 4000)}, express.static("assets/css", { maxAge: 60000 }));
server.use("/font", (req, res, next) => {setTimeout(function () {next()}, 3000)}, express.static("assets/font"));

server.get("/", function (req, res) {
  let rendered_component = App();
  let st = ReactDOMServer.renderToString(<App />);
  
  let html = ServerLayout(st);

  res.send(html);
});


server.listen(server_port, () => {
  console.log("Server is running on", server_port);
});


