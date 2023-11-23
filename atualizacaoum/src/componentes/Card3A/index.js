import './style.css'
import React from 'react';


function ScrollToPolo() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('polo');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bPA">Polo Aquático</button>
    </div>
  );
}

export default ScrollToPolo;