import './style.css'
import React from 'react';


function ScrollToVolei() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('voleibol');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bVolei">Voleibol</button>
    </div>
  );
}

export default ScrollToVolei;

