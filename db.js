const mongoose = require("mongoose");

//doordb will be created on the fly if it doesn't exist
mongoose.connect("mongodb://localhost:27017/doorDB", { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("db connected");
});

const Door = mongoose.model("Door", {
  width_in: Number,
  height_in: Number,
  type: string // hinged, sliding, automatic, basic
});

const createDemoDoors = () => {
  const slidingDoor = new Door({
    width_in: 23,
    height_in: 60,
    type: "sliding"
  });

  slidingDoor.save().then(() => {
    console.log("sliding door saved");
  });

  const basicDoor = new Door({
    width_in: 25,
    height_in: 69,
    type: "basic"
  });

  basicDoor.save().then(() => {
    console.log("basic door saved");
  });
};
