import React, { useEffect, useState } from 'react'
import TaskList from './Tasklist';
import FetchTask from './FetchTask';

const TodoList = () => {
const [tasks, setTask] = useState([])
const [loading, setLoading] = useState (true)
const [error, setError] = useState (null)

useEffect(() => {
  setLoading(true);
  FetchTask()
    .then(tasks => {
      setTask(tasks);
      setLoading(false);
    })
    .catch(() => {
      setError("Error obteniendo los datos");
      setLoading(false);
    });
}, []);

    const handleClick =(id)=>{
        const newTask = tasks.map(task=>
            task.id === id ? {...task, completed: !task.completed} : task
        )
        setTask(newTask)
    }


if (loading) return <p>se estan cargando los datos</p>
if (error) return <p>{error}</p>

  return (
    <>
        <h1>Lista de tareas</h1>
        <ul>
            <TaskList tasks={tasks} onTaskClick={handleClick}/>
        </ul>
    </>
  );
};

export default TodoList
