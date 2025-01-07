import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/taskList";
import AddTask from "./components/addTask";
import EditTask from "./components/editTask";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <div className='container p-4 mx-auto '>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/add' element={<AddTask />} />
          <Route path='/edit/:id' element={<EditTask />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
