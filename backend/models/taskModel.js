const db = require("../config/db");

const Task = {
  // Fetch all tasks
  getAllTasks: (callback) => {
    const query = "SELECT * FROM tasks ORDER BY created_at DESC"; // Sort by created_at in descending order
    db.query(query, callback);
},


  getTaskById: (id, callback) => {
    const query = "SELECT * FROM tasks WHERE id = ?";
    db.query(query, [id], callback);
  },

  // Create a new task
  createTask: (data, callback) => {
    const query = `INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)`;
    db.query(query, [data.name, data.description, data.status], callback);
  },

  // Update a task
  updateTask: (id, data, callback) => {
    const query = `
      UPDATE tasks 
      SET 
        name = ?, 
        description = ?, 
        status = ?, 
        completed_at = ?,
        updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?`;
    db.query(query, [data.name, data.description, data.status, data.completed_at, id], callback);
  },

  // Delete a task
  deleteTask: (id, callback) => {
    const query = "DELETE FROM tasks WHERE id = ?";
    db.query(query, [id], callback);
  },

  updateTaskStatus: (id, status, callback) => {
    const query = "UPDATE tasks SET status = ?, completed_at = CASE WHEN ? = 'Completed' THEN NOW() ELSE NULL END WHERE id = ?";
    db.query(query, [status, status, id], callback);
  },
};

module.exports = Task;
