const express = require("express");

const app = express();
const port = 4000;

var db = require("./db");

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("app working");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
