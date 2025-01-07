const db = require('../config/db');

const Task = {
  // Fetch all tasks
  getAllTasks: (callback) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, callback);
  },

  // Create a new task
  createTask: (data, callback) => {
    const query =
      'INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.description, data.status], callback);
  },

  // Update a task
  updateTask: (id, data, callback) => {
    const query =
      'UPDATE tasks SET name = ?, description = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
    db.query(
      query,
      [data.name, data.description, data.status, id],
      callback
    );
  },

  // Delete a task
  deleteTask: (id, callback) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Task;
