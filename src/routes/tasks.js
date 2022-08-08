const express = require("express");
const TaskController  = require("../controllers/taskController");

const router = express.Router();
router.get("/tasks", TaskController.index);
router.get("/create", TaskController.create);
router.post("/create", TaskController.store);
router.post("/tasks/delete", TaskController.destroy);
router.get("/tasks/edit/:edit", TaskController.edit);
router.post("/tasks/edit/:update", TaskController.update);

module.exports = router;