const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/PostManagerDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Connected to Database");
    else console.log("Error connecting to database", undefined, 2);
  }
);
