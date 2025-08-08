import { useState } from "react";
import "./Dofamatrix.css";

const categories = [
  { key: "debilidades", label: "Debilidades" },
  { key: "oportunidades", label: "Oportunidades" },
  { key: "fortalezas", label: "Fortalezas" },
  { key: "amenazas", label: "Amenazas" },
];

export const DofaMatrix = () => {
  const [dofa, setDofa] = useState<Record<string, string>>({
    debilidades: "",
    oportunidades: "",
    fortalezas: "",
    amenazas: "",
  });

const handleChange = (key: string, value: string) => {
  setDofa((prev) => {
    const newState = { ...prev, [key]: value }; 
    console.log("Estado DOFA actualizado:", newState); 
    return newState; 
  });
};


  const handleSave = () => {
    console.log("Datos de la DOFA:", dofa);
    alert("DOFA guardada en consola 😄");
  };

  return (
    <div className="dofa-container">
      <h1 className="dofa-title">Matriz DOFA para Cochinito App</h1>
      <div className="dofa-grid">
        {categories.map(({ key, label }) => (
          <div className="dofa-card" key={key}>
            <h2 className={`dofa-heading ${key}`}>{label}</h2>
            <textarea
              value={dofa[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder="Escribe"
            />
          </div>
        ))}
      </div>
      <div className="dofa-footer">
        <button onClick={handleSave}>
          💾 Guardar mi DOFA
        </button>
      </div>
    </div>
  );
};
