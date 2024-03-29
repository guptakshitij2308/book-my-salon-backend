const express = require("express");
const User = require("./../models/User");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// router
//   .route("/")
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router.patch("/updateMe", authController.protect, userController.updateMe);
// router.get("/deleteMe", authController.protect, userController.deleteMe);

// router.route("/:id").get(userController.getUser);
// .patch(userController.updateUser)
// .delete(userController.deleteUser);

module.exports = router;
