const Task = require("../models/taskModel");

// Get all tasks
exports.getTasks = (req, res) => {
  Task.getAllTasks((err, results) => {
    if (err) return res.status(500).json({ error: "Failed to retrieve tasks" });
    res.json(results);
  });
};

exports.getTaskById = (req, res) => {
  const { id } = req.params;

  Task.getTaskById(id, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch task" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(results[0]);
  });
};


// Create a new task
exports.createTask = (req, res) => {
  const { name, description, status } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  Task.createTask({ name, description, status: status || "Not Completed" }, (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to create task" });
    res.status(201).json({
      id: result.insertId,
      name,
      description,
      status: status || "Not Completed",
    });
  });
};

// Update a task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { name, description, status, completed_at } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  Task.updateTask(
    id,
    { name, description, status, completed_at },
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update task" });
      }
      res.sendStatus(200);
    }
  );
};


// Delete a task
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  Task.deleteTask(id, (err) => {
    if (err) return res.status(500).json({ error: "Failed to delete task" });
    res.sendStatus(200);
  });
};

exports.updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: "Status is required" });
  }

  Task.updateTaskStatus(id, status, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating task status");
    } else {
      res.sendStatus(200);
    }
  });
};