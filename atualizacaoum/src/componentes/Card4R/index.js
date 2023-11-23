import './style.css'
import React from 'react';


function ScrollToMThai() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('mthai');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bMThai">Muay Thai</button>
    </div>
  );
}

export default ScrollToMThai;