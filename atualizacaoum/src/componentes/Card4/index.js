import './style.css'
import React from 'react';


function ScrollToTenis() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('tenis');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bT">Tênis</button>
    </div>
  );
}

export default ScrollToTenis;

