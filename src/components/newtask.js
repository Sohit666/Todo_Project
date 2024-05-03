import React, { useState } from 'react';

const NewTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');
  const [completed, setCompleted] = useState('no');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return; 

    const newTask = {
      id: Date.now(),
      task: taskName,
      completed: completed === 'yes' ? true : false,
      priority: priority
    };

    onAddTask(newTask); // Call the function passed from parent component to add task
    setTaskName(''); // Clear input field after adding task
    setPriority('low'); // Reset priority to default after adding task
    setCompleted('no'); // Reset completed status to default after adding task
    alert('Task added successfully!');
  };
 
  return (
    <div className="new-task">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <select value={completed} onChange={(e) => setCompleted(e.target.value)}>
          <option value="no">Not Completed</option>
          <option value="yes">Completed</option>
        </select>
        <button type="submit"  >Add Task</button>
      
        
        
      </form>
    </div>
  );
};

export default NewTask;
