import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;