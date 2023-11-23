import './style.css'
import React from 'react';


function ScrollToFutebol() {
    const scrollToTarget = () => {
      const targetElement = document.getElementById('futebol');
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToTarget} id="bFut">Futebol</button>
      </div>
    );
  }
  
  export default ScrollToFutebol;
  