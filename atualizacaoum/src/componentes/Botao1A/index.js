import { Link } from 'react-router-dom'
import './style.css'

function Botao1 (){
    return(
        <div id="um">
            <Link to='/AbaCampo'><p id="botao">Campo</p></Link>
        </div>
    )
}

export default Botao1