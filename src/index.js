var express = require("express");
var app = express();
var arr = ["1", "2", "3", "4", "5"];

app.post("/create/:id", (req, res) => {
  let info = req.params.id;
  res.send("post id = " + info);
  arr[0] = info;
});

app.get("/list", (req, res) => {
  res.send("hello get. arr = " + arr);
});

app.get("/", (req, res) => {
  res.send("base page");
});

app.listen(8080);
