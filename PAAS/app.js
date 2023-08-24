require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send(`Hello Worldhhhh! ${process.env.TOTO}`);
});

const port = 3000;
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`);
});
