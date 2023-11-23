import './style.css'
import Not1 from '../../imagens/not1.svg'
import Not2 from '../../imagens/not2.svg'
import Not3 from '../../imagens/not3.svg'
import Not4 from '../../imagens/not4.svg'
import Not5 from '../../imagens/not5.svg'
import Not6 from '../../imagens/not6.svg'
import Not7 from '../../imagens/not7.svg'
import Not8 from '../../imagens/not8.svg'
import Not9 from '../../imagens/not9.svg'
import Not10 from '../../imagens/not10.svg'
import { Link } from 'react-router-dom'


function Body(){
    return(
        <div className="body">
            <div className="noticiaBody">
                <Link to="/copa"><img src= {Not1} alt="Taça da copa do mundo" className="imgSombra"/></Link>
                <Link to="/Olim2024"><img src= {Not2} alt="Logo da Olimpíada de Paris com a Torre Eiffel" className="imgSombra" /></Link>
                <Link to="/doping"><img src= {Not3} alt="Imagem de rémedios sobre uma medalha representando doping esportivo" className="imgSombra"/></Link>
            </div>
            <div className="noticiaCentral">
            <Link to="/assedio"><img src= {Not4} alt="Imagem da seleção feminina Espanhola"/></Link>
                <div className="textosCentrais">
                    <h2 className="textoBody">Espanha é a grande vencedora da Copa do Mundo Feminina de 2023</h2>
                    <p className="textoBody">A Copa do Mundo Feminina de 2023 foi a nona edição do torneio e sem dúvidas a maior, e teve como grande campeã a Espanha que ganhou da Inglaterra, em um jogo que terminou 1 X 0. Mas o que era para ser uma enorme comemoração foi manchada por um assédio.</p>
                </div>
            </div>
            <div className="noticiaFinal">
                <div className="imgSombra">
                    <Link to="/marta"><img src= {Not5} alt="Imagem da Marta"/></Link>   
                    <h3 className="texto">Última copa da Marta</h3>
                    
                </div>
                <div className="imgSombra">
                    <Link to="/neymar"><img src= {Not6} alt="Imagem do Neymar"/></Link>   
                    <h3 className="texto">Neymar está de casa nova</h3>
                    
                </div>
                <div className="imgSombra">
                    <Link to="/pan"><img src= {Not7} alt="Imagem da logo dos Jogos Pan-Americanos de Santiago"/></Link>   
                    <h3 className="texto">Jogos Pan-Americanos</h3>
                </div>
            </div>
            <div className="noticiaFinal2">
                <div className="imgSombra">
                    <Link to="/para"><img src= {Not8} alt="Imagem de corrida paraolímpica"/></Link>  
                    <h3 className="texto">Jogos Paralímpicos 2023</h3>
                    
                </div>
                <div className="imgSombra">
                    <Link to="/mulheres"><img src= {Not9} alt="Imagem de um jogo de voleibol feminino"/></Link>   
                    <h3 className="texto">Mulheres no esporte</h3>
                    
                </div>
                <div className="imgSombra">
                    <Link to='/BestFifa'><img src= {Not10} alt="Imagem da taça do prêmio The Best FIFA"/></Link>   
                    <h3 className="texto">The Best FIFA</h3>
                </div>
            </div>
        </div>

    )
}

export default Body