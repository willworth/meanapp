const express = require("express");
const Door = require("./model_Door");

module.exports = function(app) {
  const router = express.Router();

  router.route("/doors").get(function(req, res) {
    Door.getAllDoors((err, doors) => {
      if (err) {
        console.log(`${err}`);
        res.status(404).json({ msg: "Not found" });
      } else {
        res.json(doors);
      }
    });
  });

  router.route("/door").post(function(req, res) {
    console.log(req.body);
    const { width_in, height_in, type } = req.body;
    const door = new Door({ width_in, height_in, type });
    door.save((err, newDoor) => {
      if (err) {
        console.log(`${err}`);
        res.status(400), json({ msg: "error creating door" });
      } else {
        res.json(newDoor);
      }
    });
  });

  app.use("/api", router);
};
