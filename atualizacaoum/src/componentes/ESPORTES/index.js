import './style.css'
import {Link} from "react-router-dom"

function Esportes() {
    return(
        <div className="esportes">
        <div className="esportes-botao"><strong>ESPORTES</strong></div>
        <div className="dropdown">
            <Link to="/AbaAqua" className="dropdown-item-e">Aquático</Link>
            <Link to="/AbaCampo" className="dropdown-item-e">Campo</Link>
            <Link to="/AbaPista" className="dropdown-item-e">Pista</Link>
            <Link to="/AbaQuadra" className="dropdown-item-e">Quadra</Link>
            <Link to="/AbaRingue" className="dropdown-item-e">Ringue</Link>
        </div>
        </div> 
    )
}

export default Esportes



