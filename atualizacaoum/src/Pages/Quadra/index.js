import './style.css';
import Quadra from '../../componentes/QuadraImg';
import Botao1 from '../../componentes/Botao1Q';
import Botao2 from '../../componentes/Botao2Q';
import Botao3 from '../../componentes/Botao3Q';
import Botao4 from '../../componentes/Botao4Q';
import ScrollToBasq from '../../componentes/Card1Q';
import ScrollToFutsal from '../../componentes/Card2Q';
import ScrollToHandebol from '../../componentes/Card3Q';
import ScrollToVolei from '../../componentes/Card4Q';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';


function AbaQuadra() {
  return (
    <div className="App">
        <Header></Header>
      <header className="App-header">
        <Botao1></Botao1>
        <Botao2></Botao2>
        <Botao3></Botao3>
        <Botao4></Botao4>
      </header>
      <div>
        <Quadra></Quadra>
      </div>
        <div className="Cards">
        <ScrollToBasq></ScrollToBasq>
        <ScrollToFutsal></ScrollToFutsal>
        <ScrollToHandebol></ScrollToHandebol>
        <ScrollToVolei></ScrollToVolei>
        </div>
      <body className="conteudo">
        <div id="basquete">
          <h2>Basquete</h2>
          <p> É um dos esportes mais praticados no mundo, o basquete é um esporte coletivo e se baseia em uma disputa de bola entre dois times, com objetivo de fazer pontos por bolas arremessadas nas cestas localizadas nas extremidades da quadra, ganha quem fizer mais pontos dentro dos 40 minutos de jogo.</p>
          <p>Essa modalidade esportiva foi criada em 1891 por James Naismith (1861-1940), um professor de educação física canadense, no ano seguinte, o esporte foi oficializado após a publicação de suas 13 regras para jogar. A primeira partida oficial de basquete foi em 1892, sendo bem visto e bem aceito, a partida contou com 200 pessoas como plateia. No ano de 1893, um ano depois do primeiro jogo oficial, ocorreu o primeiro jogo oficial de basquete feminino.
          </p>
          <p>O basquete possui uma das ligas de esporte mais famosas do mundo, mundialmente conhecida como NBA (National Basketball Association), é nela que possui os melhores atletas e os melhores times disputando o título de campeão.
          </p>
          <strong><p>Regras</p></strong>
          <ul>
          <li><p>Times: É jogado por dois times com 5 jogadores cada um, no qual constantemente o jogo alterna entre ataque e defesa.</p></li>
          <li><p>Pontuação: Um arremesso de dentro do arco vale 2 pontos, enquanto um arremesso de fora da linha de três pontos vale 3 pontos. Lances livres valem 1 ponto cada.</p></li>
          <li><p>Quadra: A quadra oficial de basquete tem proporções de 28 metros de comprimento por 15 metros de largura, as cestas de cada lado são fixadas a 3,05 metros do chão, e localizadas nas extremidades.</p></li>
          <li><p>Duração da partida: As partidas duram quatro tempos de 10 minutos, isso muda quando se trata da NBA, que são quatro tempos de 12 minutos.</p></li>
          <li><p>Posse da Bola: Um jogador pode mover a bola para frente quicando-a no chão (driblando), mas não pode continuar quicando a bola depois de parar de driblar.</p></li>
          </ul>
          
        </div>
        <div id="futsal">
          <h2>Futsal</h2>
          <p>Na modalidade, também chamada de futebol de salão, o Futsal é um esporte praticado em quadra com cinco jogadores em cada time (não sendo possível iniciar o jogo com menos de três atletas em um time) e as equipes têm o objetivo de marcar gols na baliza dos oponentes.</p>
          <p>Há duas versões sobre o surgimento do futsal ou futebol de salão, como era popularmente conhecido antigamente. A primeira é de que o esporte teria começado em 1934, na cidade de Montevidéu, no Uruguai. Já a segunda diz que a modalidade teria começado em São Paulo, no ano de 1940.</p>
          <p>Em ambas as versões, o futsal começou a ser praticado na Associação Cristã de Moços (ACM). No início, as partidas se davam em quadras de basquete e galpões com regras semelhantes ao futebol de campo.</p>
          <p>As bolas eram compostas de crina vegetal, serragem ou cortiça granulada. Ao longo do tempo, a bola teve seu tamanho reduzido e o peso aumentou. Um dos motivos da mudança no peso da bola era que a bola mais leve quicava com frequência na quadra de basquete.</p>
          <p>O primeiro livro de regras do futsal foi lançado em 1956 por Habib Mahfuz, considerado o pai do esporte no Brasil, e Luiz Gonzaga de Oliveira Fernandes e o time brasileiro (seleção) é o maior campeão na Copa do Mundo de futsal masculino, com cinco títulos.</p>
          <p>Os fundamentos do futsal são: Passe, Recepção, Domínio de bola, Chute e Cabeceio.
Enquanto aos jogadores, o futsal tem:  </p>
          <ul>
            <li>Goleiro: responsável por defender o gol do seu time dos ataques do time adversário.</li>
            <li>Fixo: é o jogador mais próximo ao goleiro. É responsável por defender seu campo e o gol dos avanços da equipe adversária. Além disso, atua na organização do sistema tático do jogo.</li>
            <li>Alas: são os jogadores laterais. Eles organizam as jogadas de ataque e de defesa e, em geral, são os atletas mais velozes do time.</li>
            <li>Pivô: é o jogador posicionado mais próximo do centro da quadra e do campo adversário. É o principal jogador de ataque, geralmente o mais forte e ágil do time. </li>
          </ul>
        </div>
        <div id="handebol">
          <h2>Handebol</h2>
          <p>Handebol é uma modalidade esportiva formada por duas equipes, com 7 jogadores cada. Os jogadores, de cada equipe, trocam passes entre si, utilizando somente as mãos, visando fazer gol na área da equipe adversária (somente o goleiro de cada equipe pode tocar na bola com os pés, na intenção de evitar o gol). O jogador de linha, quando está com a bola, pode realizar apenas 3 passos com a bola na mão, depois o jogador tem que passá-la ou arremessá-la ao gol. Existem 3 formatos de handebol no mundo: indoor (quadra), outdoor (campo) e beach (praia). </p>
          <p>No handebol, temos os fundamentos e algumas posições, sendo os fundamentos: recepção, empunhadura, passes, fintas, dribles e arremessos.
Já as posições, nós temos:</p>
          <ul>
            <li>Goleiro: o papel do goleiro é fundamental principalmente para que a equipe não sofra gols e para a organização de contra-ataques. Sua principal função, portanto, é defender a meta da equipe. Entretanto, o goleiro também pode participar de jogadas ofensivas, o que geralmente ocorre quando a equipe está em desvantagem numérica.</li>
            <li>Armador central: esse jogador tem o papel principal de organizar as jogadas a serem realizadas pela equipe. Logo, ele precisa ter uma boa leitura das situações de jogo, assim como das limitações e potencialidades de ambas as equipes. </li>
            <li>Armadores laterais (ou meias): são jogadores intermediários entre o central e os jogadores que atuam nas extremidades da quadra. Armadores laterais, ou armador pela direita e pela esquerda, demonstram boa habilidade de arremessos a longa distância. Essa é uma habilidade característica dessa posição, dado que esses jogadores finalizam geralmente a ação da bola na meta a partir da linha de tiro livre (nove metros).</li>
            <li>Alas (ou pontas): esses jogadores atuam nas extremidades da quadra e, em função disso, possuem grande habilidade técnica. Geralmente atuam em situações com ângulos pouco favoráveis para a finalização da bola. Assim, acabam aprimorando as técnicas de arremesso com o intuito de abrir o ângulo e ganhar potência de movimento nas finalizações à meta. Além disso, canhotos geralmente jogam na ponta direita e destros na esquerda.</li>
            <li>Pivô: o pivô exerce uma função estratégica na equipe, atuando adiantado durante o ataque, ou seja, no setor entre a linha de tiro livre e a área de gol. Desse modo, seu objetivo é criar condições favoráveis (abrir espaços) para que jogadores da sua equipe infiltrem a barreira defensiva. Ao mesmo tempo, também busca se posicionar entre a defesa de modo a receber a bola e finalizar as jogadas.</li>
          </ul>
        </div>
        <div id="voleibol">
          <h2>Voleibol</h2>
          <p>Voleibol é uma das modalidades esportivas mais famosas no mundo todo. Criado por William George Morgan, em 1895 nos EUA, que visava um esporte que não tinha muito contato físico, o esporte consiste em duas equipes com 6 jogadores de cada lado da quadra, sendo cada lado dividido por uma rede ao centro. As equipes disputam entre si, visando fazer com que a bola de vôlei toque no chão da equipe adversária.</p>
          <p>Os fundamentos do Vôlei, consiste em:</p>
          <ul>
            <li>Saque: é o movimento que inicia o jogo, no qual um jogador, no final da quadra, do lado de sua equipe, deve passar a bola ao campo adversário.</li>
            <li>Recepção: pode ser considerado o segundo movimento do jogo (ou ponto) que pode ser de toque (tocando a bola com os dedos) ou de manchete (tocando a bola com os antebraços) na bola que vai receber o saque do adversário.</li>
            <li>Levantamento: o levantamento é a preparação da bola para o ataque, podendo a bola ser levantada tanto para o lado direito da quadra, quanto para o esquerdo.</li>
            <li>Ataque: é chamado também de “cortada”, no qual o jogador passa a bola para o lado do adversário, tentando fazer a mesma tocar o chão.</li>
            <li>Bloqueio: o bloqueio é feito por um ou mais jogadores, que se preparam para defender o ataque do time adversário, podendo até mesmo rebater a bola.</li>
          </ul>
          <p>Para o jogo de vôlei acontecer, ele deve seguir algumas regras:</p>
          <ul>
            <li>Cada equipe deve possuir 6 jogadores em quadra.</li>
            <li>O árbitro é responsável por sortear a equipe que vai realizar o primeiro saque, antes de iniciar o jogo.</li>
            <li>Enquanto a equipe que realiza o saque continuar marcando pontos, o saque continua com ela.</li>
            <li>Há um movimento de rotação, no sentido horário, do posicionamento de cada jogador na quadra, cada vez que a equipe marca um ponto contra o adversário que estiver no saque.</li>
            <li>A partir do momento que a bola é enviada do campo adversário, a equipe pode tocar na bola apenas três vezes para enviá-la de volta ao oponente.</li>
            <li>Um mesmo jogador não pode tocar a bola duas vezes consecutivas.</li>
            <li>Dois ou três jogadores podem tocar a bola simultaneamente. Nesses casos, é considerado que a bola foi tocada duas ou três vezes, respectivamente.</li>
            <li>Vence um set a equipe que fizer 25 pontos com a diferença mínima de 2 pontos.</li>
            <li>Em caso de empate antes de atingir o set (24 x 24), o jogo continua até uma das equipes alcançar a diferença de 2 pontos.</li>
            <li>No caso de partidas compostas por 5 sets, vence quem vencer 3.</li>
            <li>As posições de cada jogador são numeradas de 1 a 6 dentro da quadra. Os três jogadores que ficam logo à frente da rede ocupam as posições 2, 3 e 4, da direita, centro e esquerda, respectivamente.Os três restantes ficam na linha logo atrás dos jogadores da linha de frente. Ocupam eles as posições 1, 6 e 5, da direita, centro e esquerda, respectivamente. </li>
            <li>Essas posições devem ser mantidas em todo início de saque, podendo os jogadores se mover livremente após a realização do saque.</li>
            <li>O jogador que estiver na posição 1 é quem saca. O direito de sacar muda de equipe cada vez que uma consegue marcar um ponto contra o adversário que estava sacando. No movimento de rotação, o jogador da posição 2 se move para a 1 para sacar, o da posição 1 vai para a 6, o da 6 para a 5, e assim por diante.</li>
          </ul>
        </div>
      </body>
        <Footer></Footer>
    </div>
  );
}

export default AbaQuadra;
