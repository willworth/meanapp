const mongoose = require("mongoose");

let doorSchema = mongoose.Schema({
  width_in: Number,
  height_in: Number,
  type: String // hinged, sliding, automatic, basic
});

doorSchema.statics.createDemoDoors = function() {
  Door.estimatedDocumentCount().then(count => {
    if (count > 0) {
      console.log("Some doors already exist");
      return;
    }
  });

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

doorSchema.statics.getAllDoors = function(done) {
  // first arg is args option to filter.  we want everything, so it's empty
  Door.find({}, function(err, doors) {
    if (err) {
      done(err, null);
    } else {
      done(null, doors);
    }
  });
};

let Door = mongoose.model("Door", doorSchema);

Door.createDemoDoors();

module.exports = Door;
