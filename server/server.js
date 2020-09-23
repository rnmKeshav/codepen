import express from "express";
//const express = require("express")
const server_port = 3000;
const app = express();

app.get("/", function (req, res) {
  res.json({"foo": "bar", "hey": "no "});
});

app.listen(server_port, () => {
  console.log("Server is running on", server_port);
});
