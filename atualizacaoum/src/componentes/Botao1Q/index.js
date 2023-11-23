import { Link } from 'react-router-dom'
import './style.css'

function Botao1 (){
    return(
        <div id="um">
          <Link to='/AbaAqua'><p id="botao">Aquático</p></Link>
        </div>
    )
}

export default Botao1