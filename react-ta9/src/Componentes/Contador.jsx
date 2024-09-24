import React, { useState, useEffect } from 'react';
import './Contador.css'; // Si tienes estilos para el contador

const Contador = () => {
  const [valor, setValor] = useState(0); // Estado para el valor del contador

  // useEffect para cambiar el título del documento cuando cambia el valor
  useEffect(() => {
    document.title = `Contador: ${valor}`; // Cambia el título del documento
  }, [valor]); // Ejecutar el efecto solo cuando el valor cambia

  // Incrementar el contador
  const incrementar = () => {
    setValor(valor + 1);
  };

  // Decrementar el contador (no puede ser menor de 0)
  const decrementar = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };

  // Reiniciar el contador
  const reiniciar = () => {
    setValor(0);
  };

  return (
    <div className="contador">
      <h2>Contador: {valor}</h2>
      <div>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Contador;
