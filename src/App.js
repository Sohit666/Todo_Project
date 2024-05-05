import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskList from './components/todo';
import Navbar from './components/navbar';
import About from './components/about';
import NewTask from './components/newtask';
import './App.css';
import tasks from './components/task'; 

const App = () => {
  const [tasksList, setTasksList] = useState(tasks);

  const handleDelete = (taskId) => {
    const updatedTasks = tasksList.filter(task => task.id !== taskId);
    setTasksList(updatedTasks);
  };

  const handleAddTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
  };

  const handleSearch = (searchTerm) => {
    const filteredTasks = tasksList.filter(task => task.task.toLowerCase().includes(searchTerm.toLowerCase()));
    setTasksList(filteredTasks);
  };

  return (
    <>
      <Navbar title="Task Manager" onSearch={handleSearch} />
      <div>
        <Routes>
          <Route path="/" element={<TaskList tasks={tasksList} onDelete={handleDelete} />} />
          <Route path="/newtask" element={<NewTask onAddTask={handleAddTask} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
