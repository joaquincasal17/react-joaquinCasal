import React from 'react'

const Taskitem = ({task, onClick}) => {
  return (
    <div>
    <li
        key={task.id}
        onClick={() => onClick(task.id)}
        style={{
            cursor: 'pointer',
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'green' : 'black'
        }}
    >
    {task.text}
    </li>
    </div>
  )
}

export default Taskitem
