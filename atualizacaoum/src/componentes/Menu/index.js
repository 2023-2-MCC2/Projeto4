import menu from '../../imagens/menu.svg'
import Esportes from '../ESPORTES'
import Eventos from '../EVENTOS'
import News from '../NEWSLETTER'
import Olimpiadas from '../OLIMPIADAS'
import './style.css'



function Menu() {
    return(
        <div className="menu-ham">
           <div className="menuImg">
            <img 
            src={menu}
            alt=""/>
           </div>
           <div className="Menu-itens">
            <div className="item"><Esportes></Esportes></div>
            <div className="item"><Eventos></Eventos></div>
            <div className="item"><Olimpiadas></Olimpiadas></div>
            <div className="item"><News></News></div>
            </div>
      </div>
    
    )
}

export default Menu

