const Task = require('../models/taskModel');

exports.getTasks = (req, res) => {
  Task.getAllTasks((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createTask = (req, res) => {
  const { name, description, status } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  Task.createTask({ name, description, status: status || 'Not Completed' }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, name, description, status });
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;
  Task.updateTask(id, { name, description, status }, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(200);
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.deleteTask(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(200);
  });
};
