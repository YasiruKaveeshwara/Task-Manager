import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomAlert from "./customAlert"; // Import the CustomAlert component

function EditTask() {
  const { id } = useParams(); // Get task ID from the URL
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "Not Completed",
  });
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null); // State for custom alerts
  const navigate = useNavigate();

  // Fetch the task details
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/tasks/${id}`);
        setTask(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task:", error);
        setAlert({ message: "Failed to fetch task details. Please try again.", type: "error" });
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  // Handle input changes
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

    try {
      const updatedTask = {
        ...task,
        status: "Not Completed", // Reset status
        completed_at: null, // Remove completed_at time
      };

      await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
      setAlert({ message: "Task updated successfully!", type: "success" });
      setTimeout(() => navigate("/"), 1500); // Redirect to task list after 1.5 seconds
    } catch (error) {
      console.error("Error updating task:", error);
      setAlert({ message: "Failed to update the task. Please try again.", type: "error" });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">
          Edit Task
        </h1>

        {/* Custom Alert */}
        {alert && (
          <CustomAlert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert(null)}
          />
        )}

        <form onSubmit={handleSubmit}>
          {/* Task Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Task Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={task.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter task name"
              required
            />
          </div>

          {/* Task Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter task description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
