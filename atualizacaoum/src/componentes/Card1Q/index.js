import './style.css'
import React from 'react';


function ScrollToBasq() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('basquete');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bBasq">Basquete</button>
    </div>
  );
}

export default ScrollToBasq;
