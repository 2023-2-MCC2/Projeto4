import './style.css'
import React from 'react';


function ScrollToFutsal() {
    const scrollToTarget = () => {
      const targetElement = document.getElementById('futsal');
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToTarget} id="bFutsal">Futsal</button>
      </div>
    );
  }
  
  export default ScrollToFutsal;
  