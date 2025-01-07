# 📋 Task Manager

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![Node.js](https://img.shields.io/badge/Node.js-16.x-339933.svg)

A modern, full-stack task management application built with React, Tailwind CSS, Node.js, and MySQL. Streamline your productivity with an intuitive interface and powerful features.


## ✨ Features

### Core Functionality
- **📝 Comprehensive Task Management**
  - Create, edit, and delete tasks effortlessly
  - Rich text descriptions for detailed task information
  - Intuitive drag-and-drop organization

### Smart Organization
- **🏷️ Advanced Filtering**
  - Filter by completion status (All, Active, Completed)
  - Date-based filtering (Created Date)
  - Smart search functionality across all task fields

### User Experience
- **🎨 Modern Interface**
  - Clean, responsive design optimized for all devices

## 🚀 Tech Stack

### Frontend
- **React** - Modern UI development
- **Tailwind CSS** - Utility-first styling
- **Axios** - API communication

### Backend
- **Node.js** - Runtime environment
- **MySQL** - Data persistence

## 💻 Installation

### Prerequisites

- Node.js 16.x or later
- MySQL 8.x or later
- Git

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YasiruKaveeshwara/Task-Manager.git
   cd Task-Manager
   ```

2. **Backend Setup**
   ```bash
   # Navigate to backend
   cd backend

   # Install dependencies
   npm install

   # Configure environment
   create .env file

   # Update .env with your details
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=task_manager
   PORT=5000
   
   # Start backend server
   npm run dev
   ```

3. **Database Initialization**
   ```sql
   CREATE DATABASE task_manager;

   USE task_manager;

   CREATE TABLE tasks (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     description TEXT NOT NULL,
     status ENUM('Completed', 'Not Completed') DEFAULT 'Not Completed',
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP NULL DEFAULT NULL,
     completed_at TIMESTAMP NULL DEFAULT NULL
   );
   ```

4. **Frontend Setup**
   ```bash
   # Navigate to frontend
   cd ../frontend

   # Install dependencies
   npm install

   # Start development server
   npm start
   ```

## 🌐 API Reference

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Get specific task |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update task |
| PUT | `/tasks/:id/status` | Toggle status |
| DELETE | `/tasks/:id` | Remove task |

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── AddTask.jsx
│   │   │   ├── EditTask.jsx
│   │   │   └── CustomAlert.jsx
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│       └── index.html
```




## 👨‍💻 Author

**Yasiru Kaveeshwara**
- GitHub: [@YasiruKaveeshwara](https://github.com/YasiruKaveeshwara)
- Email: kaveeshwaray@gmail.com

---

<div align="center">
  Made with ❤️ by Yasiru Kaveeshwara
</div>