const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserByID);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);

module.exports = router;
