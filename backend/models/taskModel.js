const db = require('../config/db');

const Task = {
  getAllTasks: (callback) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, callback);
  },

  createTask: (data, callback) => {
    const query = 'INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.description, data.status], callback);
  },

  updateTask: (id, data, callback) => {
    const query = 'UPDATE tasks SET name = ?, description = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
    db.query(query, [data.name, data.description, data.status, id], callback);
  },

  deleteTask: (id, callback) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Task;
