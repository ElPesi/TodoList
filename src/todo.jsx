import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ text: '', category: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.text.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask({ text: '', category: '' });
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const categories = ["Estudio", "Hogar", "Salud", "Otro"];

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleInputChange}
          placeholder="Ingrese una tarea"
        />
        <select
          name="category"
          value={newTask.category}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una categoría</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text} - {task.category}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


}
export default App;
