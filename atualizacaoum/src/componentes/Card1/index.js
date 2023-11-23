import './style.css'
import React from 'react';


function ScrollToBeisebol() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('beisebol');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bBei">Beisebol</button>
    </div>
  );
}

export default ScrollToBeisebol;
