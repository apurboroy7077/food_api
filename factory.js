let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Hello");
});
app.get("/food", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/food.json");
});
module.exports = app;
