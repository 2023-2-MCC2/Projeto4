import './style.css'
import React from 'react';

function ScrollToFutAme() {
    const scrollToTarget = () => {
      const targetElement = document.getElementById('futAmericano');
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToTarget} id="bFutA">Futebol Americano</button>
      </div>
    );
  }
  
  export default ScrollToFutAme;
