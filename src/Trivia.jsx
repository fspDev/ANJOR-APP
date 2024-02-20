import React, { useState } from 'react';
import './Trivia.css';
import logo from './images/logo.png';

function Trivia() {
  const preguntas = [
    {
      pregunta: '¿Cuál es la capital de Francia?',
      opciones: ['Madrid', 'Londres', 'París', 'Berlín'],
      respuestaCorrecta: 'París'
    },
    {
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['Nilo', 'Amazonas', 'Misisipi', 'Yangtsé'],
      respuestaCorrecta: 'Amazonas'
    },
    {
      pregunta: '¿Cuál es el planeta más grande del sistema solar?',
      opciones: ['Marte', 'Venus', 'Júpiter', 'Saturno'],
      respuestaCorrecta: 'Júpiter'
    }
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const handleSeleccionarRespuesta = (respuesta) => {
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
    if (respuesta === respuestaCorrecta) {
      if (preguntaActual === preguntas.length - 1) {
        setMensaje('¡Felicidades, ganaste!');
      } else {
        setPreguntaActual(preguntaActual + 1);
        setMensaje('');
      }
    } else {
      setMensaje('¡Gracias por participar!');
    }
  };

  const handleRegresar = () => {
    window.location.href = '/'; // Redirige al usuario a la página principal
  };

  return (
    <div className="TriviaContainer">
        <img src={logo} className="App-logo" alt="logo" />
        {mensaje ? (
          <p className='Mensaje'>{mensaje}</p>
        ) : (
          <div className="Tarjeta">
            <p className='Pregunta'>{preguntas[preguntaActual].pregunta}</p>
            <div className="Opciones">
              {preguntas[preguntaActual].opciones.map((opcion, index) => (
                <button key={index} className="Opcion" onClick={() => handleSeleccionarRespuesta(opcion)}>
                  {opcion}
                </button>
              ))}
            </div>
          </div>
        )}
      <button className="BotonRegresar" onClick={handleRegresar}>Regresar</button>
      
    </div>
  );
}

export default Trivia;
