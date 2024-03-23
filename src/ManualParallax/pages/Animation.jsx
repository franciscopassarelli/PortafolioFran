import React, { useState, useEffect } from 'react';
import "../pages/Dashboard.css"

function Animation() {
  const textArray = ['Trabajos Freelance', 'Proyectos Personales', 'Mis Portfolios','E-commerces'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animationDuration = 4500; // Duración de la animación en milisegundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, animationDuration);

    const animationElement = document.querySelector('.Titulo3');
    animationElement.style.animationDuration = `${animationDuration}ms`;

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3 className="Titulo3">{textArray[currentIndex]}</h3>
    </div>
  );
}

export default Animation;
