import React, { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

import personas from "./data";

function App() {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredPersonas = selectedFilter
    ? personas.filter((persona) =>
        persona.descripcion.toLowerCase().includes(selectedFilter.toLowerCase())
      )
    : personas;

  const selectedPersonData = filteredPersonas.find(
    (persona) => persona.nombre === selectedPerson
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Descripción de Personas</h1>
      </header>
      <main className="App-main">
        <div className="App-filter">
          <label htmlFor="filtro">Filtrar por:</label>
          <select id="filtro" value={selectedFilter} onChange={handleFilterChange}>
            <option value="">Todos</option>
            <option value="amigable">ITR</option>
            <option value="creativo">Virtual</option>
            <option value="inteligente">AGRM</option>
          </select>
        </div>
        <div className="App-select">
          <label htmlFor="personas">Selecciona una persona:</label>
          <select id="personas" value={selectedPerson} onChange={handleChange}>
            <option value="">Seleccione una persona</option>
            {filteredPersonas.map((persona) => (
              <option key={persona.nombre} value={persona.nombre}>
                {persona.nombre}
              </option>
            ))}
          </select>
        </div>
        <CSSTransition in={selectedPersonData != null} timeout={300} classNames="fade" unmountOnExit>
          <div className="App-description">
            <h2>{selectedPersonData && selectedPersonData.nombre}</h2>
            <p>{selectedPersonData && selectedPersonData.descripcion}</p>
          </div>
        </CSSTransition>
      </main>
      <footer className="App-footer">
        <p>
          Desarrollado por [Tu nombre]
        </p>
      </footer>
    </div>
  );
}

export default App;
