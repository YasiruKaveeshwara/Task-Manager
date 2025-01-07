const express = require("express");
const { getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus } = require("../controllers/taskController");

const router = express.Router();

// Routes for Task Management
router.get("/tasks", getTasks); // Get all tasks
router.get("/tasks/:id", getTaskById); // Fetch a specific task by ID
router.post("/tasks", createTask); // Create a new task
router.put("/tasks/:id", updateTask); // Update a task
router.put("/tasks/:id/status", updateTaskStatus);
router.delete("/tasks/:id", deleteTask); // Delete a task

module.exports = router;
