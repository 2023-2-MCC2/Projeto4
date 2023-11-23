import './style.css'
import React from 'react';


function ScrollToVela() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('vela');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bVela">Vela</button>
    </div>
  );
}

export default ScrollToVela;