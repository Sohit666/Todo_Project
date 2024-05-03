import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
  const handleDelete = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div className="task-list-container">     
      {tasks.map(task => (
        <div key={task.id} className="card" style={{ width: '18rem', margin: '10px' }}>
          <div className="card-body">
            <h5 className="card-title">{task.task}</h5>
            <p className="card-text">Priority: {task.priority}</p>
            <p className="card-text">Completed: {task.completed ? 'Yes' : 'No'}</p>
            <button onClick={() => handleDelete(task.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
