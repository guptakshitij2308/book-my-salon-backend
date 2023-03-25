const express = require("express");
const router = express.Router();
const salonController = require("./../controllers/salonController");

router
  .route("/")
  .get(salonController.getAllSalons)
  .post(salonController.createNewSalon);

router
  .route("/:id")
  .get(salonController.findSalon)
  .delete(salonController.deleteSalon)
  .put(salonController.updateSalon);

module.exports = router;
