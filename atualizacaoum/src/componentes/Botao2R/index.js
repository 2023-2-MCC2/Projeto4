import { Link } from 'react-router-dom'
import './style.css'

function Botao2 (){
    return(
        <div id="dois">
            <Link to='/AbaCampo'><p id="botao">Campo</p></Link>
        </div>
    )
}

export default Botao2