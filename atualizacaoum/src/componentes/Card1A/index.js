import './style.css'
import React from 'react';


function ScrollToNadoS() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('nSincronizado');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bNS">Nado Sincronizado</button>
    </div>
  );
}

export default ScrollToNadoS;