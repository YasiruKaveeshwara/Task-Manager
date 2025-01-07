import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTask () {
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "Not Completed",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to navigate after form submission

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.name || !task.description) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/tasks", task); // Adjust the API endpoint if needed
      navigate("/"); // Navigate back to the task list
    } catch (error) {
      console.error("Error adding task:", error);
      setError("Failed to add the task. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl p-4 mx-auto bg-white rounded shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Add Task</h1>

      {error && (
        <div className="mb-4 font-medium text-red-500">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Task Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-700"
          >
            Task Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={task.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter task name"
            required
          />
        </div>

        {/* Task Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 font-semibold text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter task description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Task Status */}
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block mb-2 font-semibold text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
