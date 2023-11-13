// TaskList.js

import React from 'react';
import './TaskList.css'; // Import the styles

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => removeTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

