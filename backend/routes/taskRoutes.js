const express = require("express");
const { getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus } = require("../controllers/taskController");

const router = express.Router();

// Routes for Task Management
router.get("/tasks", getTasks); // Get all tasks
router.get("/tasks/:id", getTaskById); // Get task by ID
router.post("/tasks", createTask); // Create task
router.put("/tasks/:id", updateTask); // Update task
router.put("/tasks/:id/status", updateTaskStatus); // Update task status
router.delete("/tasks/:id", deleteTask); // Delete task

module.exports = router;
