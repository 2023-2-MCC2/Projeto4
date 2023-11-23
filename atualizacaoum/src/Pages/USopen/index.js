import Footer from '../../componentes/Footer';
import Header from '../../componentes/Header';
import LogoUS from '../../componentes/LogoUS';
import Duplafem from '../../componentes/CDfem';
import Duplamasc from '../../componentes/CDmasc';
import Fem from '../../componentes/Cfem';
import Masc from '../../componentes/Cmasc';
import Misto from '../../componentes/Cmistos';
import './style.css';


function Usopen() {
  return (
    <div className="PageUs">
      <div>
        <Header></Header>
      </div>
      <div className="header">
        <LogoUS></LogoUS>
        </div>
      <div className="conteudo">
        <h2>CAMPEÕES 2023</h2>
        <div id="campeoes">
          <div className="titulo">
            <Duplafem></Duplafem>
            <strong><p>Dupla Feminina</p></strong>
          </div>
          <div className="titulo">
            <Misto></Misto>
            <strong><p>Dupla Mista</p></strong>
          </div>
          <div className="titulo">
            <Duplamasc></Duplamasc>
            <strong><p>Dupla Masculina</p></strong>
          </div>
          <div className="titulo" id="titFem">
            <Fem></Fem>
            <strong><p>Feminina</p></strong>
          </div>
          <div className="titulo" id="titMasc">
            <Masc></Masc>
            <strong><p>Masculino</p></strong>
          </div>
        </div>
        <div className="textosSobre">
          <h3 id="sobreus">Sobre o US Open</h3>
          <p>O US Open é um dos torneios de Tênis disputado nos Estados Unidos, sendo um dos torneios mais famosos do mundo, responsável por revelar grandes tenistas mundialmente. O US Open foi criado em 1881, quando foi disputado pela primeira vez o torneio de simples masculino do Aberto dos Estados Unidos, seguido, pela disputa do torneio feminino, 6 anos depois</p>
          <p>A disputa acontece em duas semanas, entre o fim de agosto e começo de setembro do mesmo ano, reunindo 128 tenistas no masculino e feminino. O Us Open é o único dos quatro Grand Slams de tênis, a ser realizado todo ano, de forma ininterrupta.</p>
          <p>O torneio consiste em cinco diferentes categorias: simples masculino e feminino; duplas masculinas, femininas e mistas. Tendo também categorias adicionais para seniores, juniores e utilizadores de cadeira de rodas. </p>
          <p>A competição Us Open é eliminatória, cada partida tem duração de 2-3h e quem perder, está fora. Já a premiação do Us Open funciona por categorias, a SIMPLES e DUPLAS (fem, mas, e mistas). </p>
          <p>Na categoria Simples:</p>
          <ul>
            <li>Primeira rodada: 81,5 mil (R$ 333 mil)</li>
            <li>Segunda rodada: 123 mil (R$ 601 mil)</li>
            <li>Terceira rodada: 191 mil (R$ 934 mil)</li>
            <li>Oitavas de final: 284 mil (R$ 1,38 milhão)</li>
            <li>Quartas de final: 455 mil (R$ 2,2 milhões)</li>
            <li>Semifinais: 775 mil (R$ 3,7 milhões)</li>
            <li>Finalista: 1,500 milhão (R$ 7,3 milhões)</li>
            <li>Campeão: 3 milhões (R$ 14,6 milhões)</li>
          </ul>
          <p>E na categoria das duplas (valor a ser dividido entre a dupla): </p>
          <ul>
            <li>Primeira rodada: 22 mil (R$ 107 mil)</li>
            <li>Segunda rodada: 36,8 mil (R$ 180 mil)</li>
            <li>Terceira rodada: 58 mil (R$ 283 mil)</li>
            <li>Quartas de final: 100 mil (R$ 489 mil)</li>
            <li>Semifinais: 180 mil (R$ 880 mil)</li>
            <li>Finalistas: 350 mil (R$ 1,7 milhão)</li>
            <li>Campeões: 700 mil (R$ 3,4 milhões)</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Usopen;
