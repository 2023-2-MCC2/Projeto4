import { Link } from 'react-router-dom'
import './style.css'

function Olimpiadas() {
    return(
        <div className="olim">
            <div className="olim-botao"><strong>OLIMPÍADAS</strong></div>
            <div className="dropdown-olim">
            <Link to="/Olim2024" className="dropdown-item-o">Olimpíadas 2024</Link>
            <Link to="/Esportes" className="dropdown-item-o">Esportes olimpícos</Link>
            <Link to="/Funciona" className="dropdown-item-o">Como funciona</Link>
            <Link to="/BrasilOlim" className="dropdown-item-o">Brasil nas Olimpíadas</Link>
            <Link to="/Curiosidades" className="dropdown-item-o">Curiosidade</Link>
            </div>
        </div>
    )
}

export default Olimpiadas

