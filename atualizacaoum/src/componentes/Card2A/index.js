import './style.css'
import React from 'react';


function ScrollToNatacao() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('natacao');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bNat">Natação</button>
    </div>
  );
}

export default ScrollToNatacao;