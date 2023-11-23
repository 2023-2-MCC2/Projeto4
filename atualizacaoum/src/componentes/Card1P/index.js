import './style.css'
import React from 'react';


function ScrollToAPeso() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('aPeso');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bAP">Arremesso de Peso</button>
    </div>
  );
}

export default ScrollToAPeso;
