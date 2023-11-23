import './style.css'
import React from 'react';


function ScrollToCorrida() {
    const scrollToTarget = () => {
      const targetElement = document.getElementById('corrida');
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToTarget} id="bCor">Corrida</button>
      </div>
    );
  }
  
  export default ScrollToCorrida;
  