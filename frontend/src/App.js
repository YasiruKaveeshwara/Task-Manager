import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/taskList";
import AddTask from "./components/addTask";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <div className="container p-4 mx-auto ">
        
      
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/add' element={<AddTask />} />
      </Routes>
      </div>
    </Router>

   
  );
}

export default App;
