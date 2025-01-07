import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [filter, setFilter] = useState("All"); // State for filtering tasks

  // Fetch tasks from the backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks(); // Refresh the task list after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Toggle task status
  const toggleTaskStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Completed" ? "Not Completed" : "Completed";
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: newStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        )
      ); // Optimistically update the state
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  // Filter tasks based on status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return filter === "Completed"
      ? task.status === "Completed"
      : task.status === "Not Completed";
  });

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Task List</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 text-gray-700">
          Filter Tasks:
        </label>
        <select
          id="filter"
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        <ul className="bg-white rounded shadow-md">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-4 border-b last:border-b-0"
            >
              <div>
                <h3 className="text-lg font-semibold">{task.name}</h3>
                <p className="text-gray-600">{task.description}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <label className="text-gray-700">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={task.status === "Completed"}
                      onChange={() => toggleTaskStatus(task.id, task.status)}
                    />
                    Mark as {task.status === "Completed" ? "Not Completed" : "Completed"}
                  </label>
                </div>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-700">No tasks found.</p>
      )}
    </div>
  );
}

export default TaskList;
