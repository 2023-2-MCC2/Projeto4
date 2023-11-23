import Logol from '../../componentes/LogoLib'
import './style.css';
import Campeaol from '../../componentes/Campeao';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function Liberta() {
  return (
    <div className="App">
        <div>
            <Header></Header>
        </div>
      <body>
        <div className="header">
       <Logol></Logol>     
        </div>     
      <div className="conteudo">
        <h2>CAMPEÃO LIBERTADORES 2023</h2>
        <Campeaol></Campeaol>
        <div className="textosSobre">
          <h3 id="sobre">Sobre a Libertadores</h3>
          <p>A Copa Libertadores da América pode ser considerada a competição de futebol mais importante da América do Sul, pois o país campeão ganha uma vaga ao mundial de clubes de futebol da Fifa. </p>
          <p>Em 1948, foi disputada uma Copa dos Campeões da América, entre fevereiro e março do mesmo ano, reunindo os times campeões de apenas alguns países. E com o desejo de reunir novamente os times campeões, em 1959, foi realizado um congresso em Caracas, para tratar da criação da Copa dos Campeões (primeiro nome obtido pelo torneio). 
Dias depois, a decisão foi tomada e foi criada a Copa dos Campeões. 
</p>
          <p>O campeão da primeira edição do que depois viria ser a Copa Libertadores da América, foi o Peñarol, que garantiu o título após vencer, na final, a Olímpia, do Paraguai. A partida aconteceu no dia 19 de abril de 1960.</p>
          <p>A ‘Libertadores da América’ como gostamos de chamar, já teve vários nomes durantes a passagem dos anos, alguns como: de 1960 a 1964: Copa Campeões da América; de 1965 a 1997: Copa Libertadores da América; de 1998 a 2007: Copa Toyota Libertadores; de 2008 a 2012: Copa Santander Libertadores; de 2013 a 2016: Copa Bridgestone Libertadores; de 2017 a 2018: CONMEBOL Libertadores Bridgestone e a partir de 2018: CONMEBOL Libertadores.</p>
          <p>Os países que participam da CONMEBOL Libertadores são: Brasil, Venezuela, Paraguai, Uruguai, Colômbia, Argentina, Peru, Equador, Chile e Bolívia.</p>
          <p>A competição da Libertadores é dividida por fases, sendo elas Preliminares, fase de Grupos e fase Final. Na fase Preliminar, temos: </p>
          <ul>
            <li>Primeira fase: é disputada por seis equipes representantes da Bolívia, do Equador, do Paraguai, do Peru, do Uruguai e da Venezuela. Os jogos acontecem em partidas eliminatórias de ida e volta. Caso haja empate no placar agregado, a regra do gol fora de casa é considerada (quem marcar mais gols no estádio do adversário fica com a vaga), e, se permanecer a igualdade, a vaga é definida na disputa por pênaltis. Os confrontos dessa fase são definidos por meio de sorteio. Classificam-se três times.</li>
            <li>Segunda fase: é disputada por 16 equipes, sendo 13 delas representantes da Argentina, da Bolívia, do Brasil, do Chile, da Colômbia, do Equador, do Paraguai, do Peru, do Uruguai e da Venezuela, além dos três vencedores da primeira fase. Os jogos também são eliminatórios de ida e volta. Em caso de empate, permanecem os mesmos critérios da fase anterior.</li>
            <li>Terceira fase: é disputada pelas oito equipes vencedoras da segunda fase. Os jogos acontecem em partidas eliminatórias de ida e volta. Em caso de empate, também permanecem os mesmos critérios da fase anterior. Os vencedores de cada confronto são classificados à fase de grupos.</li>
          </ul>
          <p>Na fase de Grupos, temos: 32 equipes, divididas em oito grupos, porém, em um mesmo grupo. Não podendo haver dois times de um mesmo país. São realizados jogos de ida e volta contra cada um dos outros times do mesmo grupo. Os dois primeiros colocados de cada grupo classificam-se para a fase de oitavas de final. Já os oito times posicionados na terceira posição, em seus respectivos grupos, classificam-se para a segunda fase da Copa Sul-Americana.</p>
          <p>Na fase Final, temos: Oitavas de Final, Quartas de Final, Semifinal e a grande Final.</p>
          <ul>
            <li>Oitavas de Final: são disputadas pelas equipes classificadas na fase de grupos, e os times realizam partidas de ida e volta. Os times com melhor desempenho na fase de grupos definem suas partidas em casa. Nessa fase podem enfrentar-se os times de um mesmo país, assim como também os que já tenham se enfrentado na fase de grupos da competição.</li>
            <li>Quartas de Final: são disputadas pelas oito equipes vencedoras dos confrontos das oitavas de final, que realizam jogos de ida e volta. Os times com melhor desempenho nas oitavas definem suas partidas em casa. Nessa fase também podem enfrentar-se os times de um mesmo país.</li>
            <li>Semifinais: são disputadas pelos quatro times vencedores dos confrontos da fase anterior, em partidas de ida e volta. Os times com melhor desempenho nas quartas de final definem suas partidas em casa. Nessa fase também podem enfrentar-se os times de um mesmo país.</li>
            <li>Final: é disputada pelos times vencedores das duas semifinais. As equipes disputam uma partida única pelo título de campeão do torneio, em local predefinido pela CONMEBOL. Em caso de igualdade de pontos ao término da partida, há uma prorrogação de 30 minutos, dividida em dois períodos de 15 minutos cada um. Se, ao término dessa prorrogação de 30 minutos, persistir a igualdade, o ganhador é conhecido por disputa de pênaltis.</li>
          </ul>
          <p>Após o fim da partida final, é realizada a cerimônia de entrega do troféu e das medalhas. O troféu fica em posse temporária da equipe vencedora, que deve devolvê-lo antes do sorteio da competição do ano seguinte. Depois, a equipe recebe uma réplica da taça.</p>
          <p>O campeão da Libertadores ganha o direito de disputar a Recopa Sul-Americana, do ano seguinte, com o campeão da Copa Sul-Americana, e garante a vaga para a competição do próximo ano. Além disso, os clubes também recebem uma premiação financeira, de acordo com cada fase da competição.</p>
          <p>A Argentina é a maior campeã da CONMEBOL Libertadores com 25 troféus, sendo o Brasil o país que mais se aproxima do número de vitórias, sendo esse com 21 troféus.</p>
        </div>
      </div>
      </body>
      <div className="footer">
            <Footer></Footer>
        </div>
    </div>
  );
}

export default Liberta;
