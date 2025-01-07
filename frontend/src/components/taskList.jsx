import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import CustomAlert from "./customAlert";
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [alert, setAlert] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [expandedTask, setExpandedTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [createdAtFilter, setCreatedAtFilter] = useState(""); // State for filtering by created_at
const [completedAtFilter, setCompletedAtFilter] = useState(""); // State for filtering by completed_at


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
      setAlert({ message: "Task deleted successfully!", type: "success" });
      fetchTasks(); // Refresh the task list after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
      setAlert({ message: "Failed to delete the task.", type: "error" });
    }
  };

  // Handle deletion confirmation
  const handleDelete = (id) => {
    setConfirmDelete(id);
  };

  const confirmDeletion = () => {
    if (confirmDelete) {
      deleteTask(confirmDelete);
      setConfirmDelete(null);
    }
  };

  const cancelDeletion = () => {
    setConfirmDelete(null);
  };

  // Toggle expanded state for a task
  const toggleExpand = (id) => {
    setExpandedTask((prev) => (prev === id ? null : id));
  };

  const toggleTaskStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Completed" ? "Not Completed" : "Completed";
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}/status`, { status: newStatus });
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)));
      setAlert({ message: `Task marked as ${newStatus}!`, type: "success" });
    } catch (error) {
      console.error("Error updating task status:", error);
      setAlert({ message: "Failed to update task status.", type: "error" });
    }
  };

  // Filter tasks based on status
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "All" ? true : filter === "Completed" ? task.status === "Completed" : task.status === "Not Completed";
    const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase());
  
    const matchesCreatedAt = createdAtFilter
      ? new Date(task.created_at).toISOString().split("T")[0] === createdAtFilter
      : true;
  
    const matchesCompletedAt = completedAtFilter
      ? task.completed_at && new Date(task.completed_at).toISOString().split("T")[0] === completedAtFilter
      : true;
  
    return matchesFilter && matchesSearch && matchesCreatedAt && matchesCompletedAt;
  });

  return (
    <div className='max-w-4xl p-4 mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>Task List</h1>

      {/* Filter Dropdown and Search Box */}
      <div className="flex flex-wrap items-center justify-between mb-4 space-y-2 md:space-y-0">
  <div>
    <label htmlFor="filter" className="mr-2 font-semibold text-gray-700">
      Filter Tasks:
    </label>
    <select id="filter" className="p-2 border rounded-md" value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Not Completed">Not Completed</option>
    </select>
  </div>
  <div>
    <label htmlFor="search" className="mr-2 font-semibold text-gray-700">
      Search:
    </label>
    <input
      type="text"
      id="search"
      placeholder="Search by task name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 border rounded-md"
    />
  </div>
  <div>
    <label htmlFor="createdAtFilter" className="mr-2 font-semibold text-gray-700">
      Created At:
    </label>
    <input
      type="date"
      id="createdAtFilter"
      value={createdAtFilter}
      onChange={(e) => setCreatedAtFilter(e.target.value)}
      className="p-2 border rounded-md"
    />
  </div>
  <div>
    <label htmlFor="completedAtFilter" className="mr-2 font-semibold text-gray-700">
      Completed At:
    </label>
    <input
      type="date"
      id="completedAtFilter"
      value={completedAtFilter}
      onChange={(e) => setCompletedAtFilter(e.target.value)}
      className="p-2 border rounded-md"
    />
  </div>
</div>


      {/* Task List */}
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`p-6 mb-4 border rounded-lg shadow-sm cursor-pointer transition-transform transform ${
            expandedTask === task.id ? "bg-gray-100 scale-105" : "bg-white hover:shadow-lg"
          }`}
          onClick={() => toggleExpand(task.id)}>
          {/* Task Header */}
          <div className='flex '>
            <h3 className='text-lg font-semibold'>{task.name}</h3>
            <div className='flex ml-auto space-x-4'>
              <p className={`font-bold ${task.status === "Completed" ? "text-green-600" : "text-red-600"}`}>{task.status}</p>
              <input
                type='checkbox'
                checked={task.status === "Completed"}
                onChange={(e) => {
                  e.stopPropagation(); // Prevent card expansion when toggling status
                  toggleTaskStatus(task.id, task.status);
                }}
              />
            </div>
          </div>
          <p className={`text-gray-600 ${expandedTask === task.id ? "" : "truncate"}`}>{task.description}</p>

          {/* Expanded Details */}
          {expandedTask === task.id && (
            <div className='mt-2 text-sm text-gray-700'>
              {task.updated_at && (
                <p>
                  <span className='font-semibold'>Updated At:</span> {new Date(task.updated_at).toLocaleString()}
                </p>
              )}
              {task.completed_at && (
                <p>
                  <span className='font-semibold'>Completed At:</span> {new Date(task.completed_at).toLocaleString()}
                </p>
              )}
            </div>
          )}

          {/* Task Controls */}
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center space-x-2'>
              <p>
                <span className='text-sm font-semibold'>Created At:</span> {new Date(task.created_at).toLocaleString()}
              </p>
            </div>
            <div className='flex space-x-2'>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering expand when clicking delete
                  handleDelete(task.id);
                }}
                className='flex items-center px-3 py-1 space-x-1 text-white bg-red-500 rounded hover:bg-red-600'>
                <span>Delete</span>
              </button>
              <Link to={`/edit/${task.id}`} className='flex items-center px-3 py-1 space-x-1 text-white bg-blue-500 rounded hover:bg-blue-600'>
                <span>Edit</span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Confirmation Modal */}
      {confirmDelete && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
            <h2 className='mb-4 text-xl font-bold text-gray-800'>Confirm Deletion</h2>
            <p className='mb-6 text-gray-700'>Are you sure you want to delete this task? This action cannot be undone.</p>
            <div className='flex justify-end space-x-4'>
              <button onClick={cancelDeletion} className='px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300'>
                Cancel
              </button>
              <button onClick={confirmDeletion} className='px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Alert */}
      {alert && <CustomAlert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
    </div>
  );
}

export default TaskList;
