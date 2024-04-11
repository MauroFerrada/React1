import React, { useState } from 'react';
import './Home.module.css';
import Boton from '../../components/boton/Boton.js';


const Home = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { descripcion: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const alternarEstadoTarea = index => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[index].completada = !tareasActualizadas[index].completada;
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = index => {
    const tareasActualizadas = tareas.filter((_, i) => i !== index);
    setTareas(tareasActualizadas);
  };

  const tareasFiltradas = tareas.filter(tarea => tarea.descripcion.toLowerCase().includes(busqueda.toLowerCase()));
  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={e => setNuevaTarea(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <Boton onClick={agregarTarea}>Agregar</Boton>
      <input
        type="text"
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        placeholder="Buscar tareas"
      />
      <p>Total de tareas: {tareas.length}</p>
      <p>Tareas completadas: {tareasCompletadas}</p>
      <ul>
        {tareasFiltradas.length > 0 ? (
          tareasFiltradas.map((tarea, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => alternarEstadoTarea(index)}
              />
              <span
                style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
              >
                {tarea.descripcion}
              </span>
              <Boton onClick={() => eliminarTarea(index)}>Eliminar</Boton>
            </li>
          ))
        ) : (
          <p>No hay tareas que coincidan con la búsqueda.</p>
        )}
      </ul>
      {tareas.length === 0 && <p>No hay tareas por hacer.</p>}
    </div>
  );
};

export default Home;