import './style.css'
import React from 'react';


function ScrollToSaltoVara() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('saltoVara');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bSVara">Salto com Vara</button>
    </div>
  );
}

export default ScrollToSaltoVara;

