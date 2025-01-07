const express = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

// Routes for Task Management
router.get("/tasks", getTasks); // Get all tasks
router.post("/tasks", createTask); // Create a new task
router.put("/tasks/:id", updateTask); // Update a task
router.delete("/tasks/:id", deleteTask); // Delete a task

module.exports = router;
