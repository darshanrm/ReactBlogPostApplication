require("./Database/db");
var bodyparser = require("body-parser");
var express = require("express");
var cors = require("cors");

var postMessageRoutes = require("./controllers/postMessageController");

const app = express();
app.use(bodyparser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.listen(4000, () => {
  console.log("server started at port number 4000");
});

app.use("/postMessages", postMessageRoutes);
