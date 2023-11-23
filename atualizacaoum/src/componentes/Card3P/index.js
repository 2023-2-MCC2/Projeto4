import './style.css'
import React from 'react';


function ScrollToLanDar() {
    const scrollToTarget = () => {
      const targetElement = document.getElementById('LDardo');
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToTarget} id="lDar">Lançamento de Dardo</button>
      </div>
    );
  }
  
  export default ScrollToLanDar;
  