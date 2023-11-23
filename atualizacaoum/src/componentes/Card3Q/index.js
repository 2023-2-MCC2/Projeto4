import './style.css'
import React from 'react';

function ScrollToHandebol() {
    const scrollToTarget = () => {
      const targetElement = document.getElementById('handebol');
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToTarget} id="bHand">Handebol</button>
      </div>
    );
  }
  
  export default ScrollToHandebol;
