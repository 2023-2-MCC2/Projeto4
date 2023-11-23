import { Link } from 'react-router-dom'
import './style.css'

function Botao1 (){
    return(
        <div id="um">
            <Link to='/AbaRingue'><p id="botao">Ringue</p></Link>
        </div>
    )
}

export default Botao1