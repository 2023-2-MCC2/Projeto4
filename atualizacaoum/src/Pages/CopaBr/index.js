import Logocb from '../../componentes/LogoCopabr';
import './style.css';
import Campeaocbr from '../../componentes/CampeaoCbr';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function CopaBr() {
  return (
    <div className="App">
        <div>
            <Header></Header>
        </div>
      <body>
        <div className="header ">
            <Logocb></Logocb>
        </div>
      <div className="conteudo">
      <h2>CAMPEÃO COPA DO BRASIL 2023</h2>
      <Campeaocbr></Campeaocbr>
      <div className='textosCopabr'>
        <h3 id="sobre">Sobre a Copa do Brasil</h3>
        <p>Copa do Brasil de Futebol ou, simplesmente, Copa do Brasil é uma competição entre clubes de futebol nacional, onde o clube derrotado é eliminado logo de ‘cara’, sendo uma competição que se assemelha a outras competições, como: copa da Inglaterra, Taça de Portugal, Copa do Rei, Copa da Escócia.</p>
        <p>A partir de 2021, começou a ser disputada por 92 equipes, sendo todas dos 26 estados brasileiros e o distrito federal. Onze destas equipes já são classificadas diretamente para as oitavas de final. Atualmente, no ano de 2023, a copa começou a ser patrocinada pela Betano, tendo seu nome alterado para Copa Betano do Brasil.</p>
        <p>Como funciona a disputa entre os clubes: </p>
        <ul>
          <li>Primeira fase: jogo único, com o time de menor pontuação no Ranking Nacional de Clubes (RNC) da CBF sendo o mandante. Em caso de empate, o visitante se classifica. Os duelos com os 80 times serão definidos por sorteio.</li>
          <li>Segunda fase: também em jogo único, tendo o mando de campo da partida definido por sorteio. Em caso de empate, disputa da classificação nos pênaltis.</li>
          <li>Terceira fase: entram os 12 times previamente classificados [Libertadores, Copa do Nordeste, Copa Verde, Série B e Série A do Brasileirão] mais as 20 equipes que passaram das duas primeiras fases. Sorteio define os confrontos, com jogos de ida e volta.</li>
          <li>Oitavas de final: jogos de ida e volta, com um sorteio entre os 16 classificados. Todos os clubes poderão se enfrentar.</li>
          <li>Quartas de final: partidas de ida e volta, e um sorteio entre os oito classificados para a formação dos duelos. Todos as equipes poderão se enfrentar.</li>
          <li>Semifinais e Final: duelos de ida e volta, com o mando de campo definido por sorteio. Em caso de empate na soma dos placares das partidas, decisão nos pênaltis.</li>
        </ul>
        <p>A partir de 2023, a CBF vai distribuir até R$ 416,9 milhões em cotas de participação aos clubes na edição atual. Na primeira e segunda fase, a premiação é dividida entre 3 grupos: clubes da Série A, clubes da Série B e demais clubes que representam maioria na competição.</p>
      <ul>
        <li>Primeira fase: R$ 620 mil (grupo 3), R$ 1,09 milhão (grupo 2) ou R$ 1,27 milhão (grupo 3)</li>
        <li>Segunda fase: R$ 750 mil (grupo 3), R$ 1,19 milhão (grupo 2) ou R$ 1,5 milhão (grupo 1)</li>
        <li>Terceira fase: R$ 1,9 milhão</li>
        <li>Oitavas de final: R$ 3 milhões</li>
        <li>Quartas de final: R$ 3,9 milhões</li>
        <li>Semifinal: R$ 8 milhões</li>
        <li>Vice-campeão: R$ 25 milhões</li>
        <li>Campeão: R$ 60 milhões</li>
      </ul>
      <p>Na edição de 2023, o clube São Paulo levou a melhor na final contra o Flamengo, eliminando o Corinthians e o Grêmio na semifinal, respectivamente.</p>
      </div>
      </div>
      </body>
      <div className="footer">
            <Footer></Footer>
        </div>
    </div>
  );
}

export default CopaBr;
