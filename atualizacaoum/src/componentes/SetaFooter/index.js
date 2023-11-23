// import seta from '../../imagens/setafooter.svg'
import React, { Component } from 'react';
import './style.css'


class ScrollToTopButton extends Component {
    scrollToTop = () => {
      window.scrollTo(0, 0);
    };
  
    render() {
      return (
        <button onClick={this.scrollToTop} id="botaoProTopo"></button>
      );
    }
  }
  export default ScrollToTopButton