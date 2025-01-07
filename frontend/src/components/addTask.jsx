import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomAlert from "./customAlert"; 

function AddTask() {
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "Not Completed",
  });

  const [alert, setAlert] = useState(null); 
  const navigate = useNavigate();

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
      setAlert({ message: "Please fill out all fields.", type: "error" });
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/tasks", task);
      setAlert({ message: "Task added successfully!", type: "success" });
      setTimeout(() => navigate("/"), 3000); // Redirect to task list after 3 seconds
    } catch (error) {
      console.error("Error adding task:", error);
      setAlert({ message: "Failed to add the task. Please try again.", type: "error" });
    }
  };

  // Close the popup alert
  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <div className='flex items-center justify-center min-h-screen p-6 bg-gray-100'>
      <div className='w-full max-w-lg p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='mb-6 text-3xl font-bold text-center text-blue-600'>Add a New Task</h1>

        {/* Popup Alert */}
        {alert && <CustomAlert message={alert.message} type={alert.type} onClose={closeAlert} />}

        <form onSubmit={handleSubmit}>
          {/* Task Name */}
          <div className='mb-6'>
            <label htmlFor='name' className='block mb-2 text-lg font-medium text-gray-700'>
              Task Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={task.name}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none'
              placeholder='Enter task name'
              required
            />
          </div>

          {/* Task Description */}
          <div className='mb-6'>
            <label htmlFor='description' className='block mb-2 text-lg font-medium text-gray-700'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              value={task.description}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none'
              placeholder='Enter task description'
              rows='4'
              required></textarea>
          </div>

          {/* Task Status */}
          <div className='mb-6'>
            <label htmlFor='status' className='block mb-2 text-lg font-medium text-gray-700'>
              Status
            </label>
            <select
              id='status'
              name='status'
              value={task.status}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none'>
              <option value='Not Completed'>Not Completed</option>
              <option value='Completed'>Completed</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type='submit' className='w-full py-3 font-semibold text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600'>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
