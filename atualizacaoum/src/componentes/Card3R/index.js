import './style.css'
import React from 'react';


function ScrollToLLivre() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('lutalivre');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bLlivre">Luta livre</button>
    </div>
  );
}

export default ScrollToLLivre;