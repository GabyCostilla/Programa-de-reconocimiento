import React, { useState } from "react";

import personas from "./data";

function App() {
  const [selectedPerson, setSelectedPerson] = useState("");

  const handleChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  const selectedPersonData = personas.find((persona) => persona.nombre === selectedPerson);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Descripción de Personas</h1>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="personas">Selecciona una persona:</label>
        <select id="personas" value={selectedPerson} onChange={handleChange}>
          <option value="">Seleccione una persona</option>
          {personas.map((persona) => (
            <option key={persona.nombre} value={persona.nombre}>
              {persona.nombre}
            </option>
          ))}
        </select>
      </div>
      {selectedPersonData && (
        <div>
          <h2>{selectedPersonData.nombre}</h2>
          <p>{selectedPersonData.descripcion}</p>
        </div>
      )}
    </div>
  );
}

export default App;
