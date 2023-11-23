import { Link } from 'react-router-dom'
import './style.css'

function Botao1 (){
    return(
        <div id="um">
            <Link to='/AbaQuadra'><p id="botao">Quadra</p></Link>
        </div>
    )
}

export default Botao1