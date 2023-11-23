import './style.css'
import React from 'react';


function ScrollToBoxe() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('boxe');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bBoxe">Boxe</button>
    </div>
  );
}

export default ScrollToBoxe;