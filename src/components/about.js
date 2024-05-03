import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h2>About My Todo List Project</h2>
      <p>This is a simple Todo list project built using React. It allows you to:</p>
      <ul>
        <li>Add new tasks to your list</li>
        <li>Delete tasks from the list</li>
        <li>Set priority levels for tasks</li>
      </ul>
      <p>The project demonstrates basic CRUD (Create, Read, Update, Delete) operations in a React application.</p>
      <p>It also showcases the use of React Router for navigation between different pages.</p>
      <p>Feel free to explore and customize it further!</p>
    </div>
  );
};

export default About;
