import Logo from '../../componentes/Logo'
import Barra from '../../componentes/BarraPesquisa'
import Esportes from '../../componentes/ESPORTES'
import Eventos from '../../componentes/EVENTOS'
import Olimpiadas from '../../componentes/OLIMPIADAS'
import News from '../../componentes/NEWSLETTER'
import Menu from '../../componentes/Menu'
import './style.css'


function Header (){
    return(
        <header className="headerMedia">
          <div className="Topo">
            <div className="menu-hamb">
              <Menu></Menu>
            </div>
            <div className="TopoLogo">
              <Logo></Logo>
            </div>
            <div className="TopoBarra">
              <Barra></Barra>
            </div>
          </div>
          <div id="barranavegacao">
          <Esportes></Esportes>
          <Eventos></Eventos>
          <Olimpiadas></Olimpiadas>
          <News></News>
          </div> 
        </header>
    )
}

export default Header