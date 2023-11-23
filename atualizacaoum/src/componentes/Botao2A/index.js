import { Link } from 'react-router-dom'
import './style.css'

function Botao1 (){
    return(
        <div id="um">
            <Link to='/AbaPista'><p id="botao">Pista</p></Link>
        </div>
    )
}

export default Botao1