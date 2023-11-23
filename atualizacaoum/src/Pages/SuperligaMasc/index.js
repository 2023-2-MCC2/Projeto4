import Logoslmasc from '../../componentes/LogoSLM';
import './style.css';
import Campeaoslmasc from '../../componentes/CampeaoSLM';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function SuperLM() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <div className="header">
          <Logoslmasc></Logoslmasc>
        </div>
        <div className="conteudo">
          <h2>CAMPEÃO SUPERLIGA 2023</h2>
          <Campeaoslmasc></Campeaoslmasc>
          <div className="textosSobre">
            <h3 id="sobre">Sobre a Superliga</h3>
            <p>A superliga de vôlei é o principal campeonato de voleibol do Brasil. Criada em 1994, a superliga de vôlei foi responsável por impulsionar o esporte no Brasil, no ramo feminino quanto masculino (Superliga Feminina de Vôlei e Superliga Masculina de Vôlei, respectivamente). Nela, 12 equipes disputam entre si, com turno e returno, pontos corridos para se classificarem entre os 8 primeiros colocados da competição, podendo assim, disputar as quartas, semis e, possivelmente, a final. </p>
            <p>Quartas e semifinais da superliga são em melhor de 3 jogos, sendo a final de jogo único. As duas últimas equipes da fase de classificação são rebaixadas para a Superliga B, e o campeão e o vice da Superliga B, sobem para a principal competição do país. </p>
            <p>As pontuações dos times nos jogos são:</p>
            <ul>
              <li>Vitória de 3x0 e 3x1 = 3 pontos para a equipe vencedora.</li>
              <li>Vitória de 3x2 = 2 pontos para a equipe vencedora e 1 ponto para a equipe perdedora. </li>
            </ul>
            <p>A Superliga de Vôlei Masculina e Feminina de 2023/2024 vai começar e essas serão as equipes que vão disputar o título:</p>
            <br />
            <div className="listasVolei">
              <ul>
                <label><strong>Superliga Masculina: </strong></label>
                <li>Sada Cruzeiro</li>
                <li>Itambé Minas</li>
                <li>Farma Conde/São José</li>
                <li>Suzano</li>
                <li>Vedacit Vôlei Guarulhos</li>
                <li>Vôlei Renata</li>
                <li>Joinville</li>
                <li>Sesi</li>
                <li>Apan Roll-On</li>
                <li>Azulim Gabarito Monte Carmelo</li>
                <li>Montes Claros América</li>
                <li>Araguari</li>
              </ul>
              <ul>
                <label><strong>Superliga Feminina: </strong></label>
                <li>Dentil Praia Clube</li>
                <li>Associação Atlética São Caetano</li>
                <li>Esporte Clube Pinheiros</li>
                <li>Sesi Vôlei Bauru</li>
                <li>Gerdau Minas</li>
                <li>Bluvolei Furb SME</li>
                <li>Brasília Vôlei</li>
                <li>Osasco São Cristóvão Saúde</li>
                <li>Barueri Volleyball Club</li>
                <li>Fluminense Football Clube</li>
                <li>Sesc RJ Flamengo</li>
                <li>Unilife Vôlei Maringá</li>
              </ul>
            </div>
          </div>
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default SuperLM;
