import './style.css'
import React from 'react';


function ScrollToJiu() {
  const scrollToTarget = () => {
    const targetElement = document.getElementById('jiu');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToTarget} id="bJiu">Jiu-jitsu</button>
    </div>
  );
}

export default ScrollToJiu;