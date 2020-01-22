const mongoose = require("mongoose");

//doordb will be created on the fly if it doesn't exist
mongoose.connect("mongodb://localhost:27017/doorDB", { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("db connected");
});

module.exports = db;
