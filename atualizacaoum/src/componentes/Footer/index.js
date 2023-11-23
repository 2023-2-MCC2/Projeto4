import Ong1 from '../../imagens/ong1.svg'
import Ong2 from '../../imagens/ong2.svg'
import ScrollToTopButton from '../../componentes/SetaFooter'
import { Link } from 'react-router-dom'
import './style.css'
function Footer (){
    return(
        <div className="Footer">
        <div className="linksFooter">
            <a href="/" className="linkF">Fale conosco</a>
            <a href="/" className="linkF">Trabalhe conosco</a>
            <a href="/" className="linkF">Sobre nós</a>
            <Link to ="/Login" className="linkF" id="Login">Login</Link>
        </div>
        <div className="Apoio">
            <p>Apoio:</p>
            <a href="https://add.org.br/" target="_blank" rel="noreferrer"><img src={Ong1} alt="Logo da ONG Associação Desportiva para Deficientes"/></a>
            <a href="https://www.esportemais.org/" target="_blank" className="ONG" rel="noreferrer"><img src={Ong2} alt="Logo da ONG Instituto Esporte Mais"/></a>
        </div>
        <div className="seta">
            <ScrollToTopButton></ScrollToTopButton>
        </div>
        <div className="direitos">
            <p>2023 CVB - Todos os direitos reservados. Segurança e privacidade.</p>
        </div>
        </div>
        
    )
}

export default Footer