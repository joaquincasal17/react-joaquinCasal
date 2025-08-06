import React from 'react';
import Taskitem from './Taskitem';


const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Taskitem key={task.id} task={task} onClick={onTaskClick} />
      ))}
    </ul>
  );
};

export default TaskList;