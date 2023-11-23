import pis from '../../imagens/pista.svg'
import './style.css'

function Pista() {
    return(
        <div>
            <img src={pis} id="imagemTopo" alt="imagem de uma pista de corrida"/> 
        </div>
    )
}

export default Pista