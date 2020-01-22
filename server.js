const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const port = 4000;

var db = require("./db");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("app working");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
