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

  app.use("/api", router);
};
