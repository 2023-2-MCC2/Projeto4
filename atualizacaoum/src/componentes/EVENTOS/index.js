import './style.css'
import {Link} from "react-router-dom"

function Eventos(){
    return(
        <div className="eventos">
            <div className="eventos-botao"><strong>EVENTOS</strong></div>
                <div className="dropdown-eventos">
                    <Link to="/brasileirao" className="dropdown-item-e">Brasileirão</Link>
                    <Link to="/liberta" className="dropdown-item-e">Libertadores</Link>
                    <Link to="/CopaBr" className="dropdown-item-e">Copa do Brasil</Link>
                    <Link to="/Nfl" className="dropdown-item-e">NFL</Link>
                    <Link to="/us" className="dropdown-item-e">Tênis</Link>
                    <Link to="/f1" className="dropdown-item-e">Fórmula 1</Link>
                    <Link to="/SuperLF" className="dropdown-item-e">Superliga Feminina</Link>
                    <Link to="/SuperLM" className="dropdown-item-e">Superliga Masculina</Link>
                </div> 
        </div>
    )
}

export default Eventos