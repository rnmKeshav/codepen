import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import ServerLayout from "./ServerLayout";

const server_port = 3000;
const server = express();

server.get("/", function (req, res) {
  let rendered_component = App();
  console.log("rendered_component", typeof rendered_component, rendered_component);
  let st = ReactDOMServer.renderToString(<App />);
  
  let html = ServerLayout(st);

  res.send(html);
});


server.listen(server_port, () => {
  console.log("Server is running on", server_port);
});


