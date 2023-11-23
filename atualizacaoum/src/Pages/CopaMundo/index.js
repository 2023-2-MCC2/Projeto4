import './style.css'
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import mapa from '../../imagens/mapa.svg'

function CopaMundo() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Copa do Mundo de 2026: onde será?</h2>
                <p>Pela primeira vez na história a competição vai contar com três sedes, sendo elas, Estados Unidos, México e Canadá. As cidades-sedes serão 11,3 e 2, respectivamente.</p>
                <div id="mapa2026">
                   <img src= {mapa} alt="Mapa das sedes da Copa de 2026" /> 
                </div>
                <p>Além disso, também pela primeira vez a Copa do Mundo contará com 48 seleções, logo, a distribuição de vagas para o Mundial foi atualizada para:</p>
                <ul>
                    <li>Europa:16 vagas</li>
                    <li>África: 9 vagas mais um na repescagem</li>
                    <li>Ásia: 8 mais um na repescagem</li>
                    <li>América do Sul: 6 mais um na repescagem</li>
                    <li>América Central e do Norte: 6 mais um na repescagem</li>
                    <li>Oceania: 1</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default CopaMundo