import './style.css';
import Campo from '../../componentes/CampoImg';
import Botao1 from '../../componentes/Botao1';
import Botao2 from '../../componentes/Botao2';
import Botao3 from '../../componentes/Botao3';
import Botao4 from '../../componentes/Botao4';
import ScrollToBeisebol from '../../componentes/Card1';
import ScrollToFutebol from '../../componentes/Card2';
import ScrollToFutAme from '../../componentes/Card3';
import ScrollToTenis from '../../componentes/Card4';
import Footer from '../../componentes/Footer';
import Header from '../../componentes/Header';



function AbaCampo() {
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
        <Campo></Campo>
      </div>
      <div className="Cards">
        <ScrollToBeisebol></ScrollToBeisebol>
        <ScrollToFutebol></ScrollToFutebol>
        <ScrollToFutAme></ScrollToFutAme>
        <ScrollToTenis></ScrollToTenis>
      </div>
      <body className="conteudo">
        <div id="beisebol">
          <h2>Beisebol</h2>
          <p>O beisebol é um esporte americano de muito sucesso na América do Norte e em alguns países da América do Norte, No Extremo Oriente e no Caribe hispanófono. O esporte tem uma origem que não é baseada em uma pessoa ou um coletivo que inventaram a modalidade, é um esporte que passou por diversas por mudanças e evolui com o passar do tempo, até virar uma modalidade esportiva. É discutível que o esporte teve como base para sua criação os jogos de cricket e rounders, que eram esportes populares no Reino Unido, Grã Bretanha e na Irlanda.</p>
          <p>A data mais antiga de um jogo de baseball é de 1744, no Reino Unido, depois disso, o esporte foi levado para os Estados Unidos, onde o esporte começou a se tornar popular na região, e ocasionalmente, no mundo. A modalidade foi inclusa no programa de jogos olímpicos em Barcelona 1992, mas anos depois, foi removida a partir da etapa de Londres, que aconteceu em 2012. No ano de 2016, o esporte foi aprovado pelo comitê olímpico como esporte olímpico para os jogos de Tokyo 2020, e retornará nas olimpíadas de 2028, ficando fora dos jogos de 2024.</p>
          <p>A principal liga profissional de beisebol dos Estados Unidos, a Major League Baseball (MLB), foi criada em 1869 e foi muito importante para a organização e o sucesso do esporte ao redor do mundo. A prática da modalidade foi se espalhando e se tornando mais popular ao redor do mundo, sendo um esporte apreciado e reconhecido mundialmente.</p>
          <p><strong>Regras:</strong></p>
          <ul>
            <li>Equipes: Cada time de beisebol tem nove jogadores. Uma equipe ataca, e a outra defende.</li>
            <li>Objetivo: O objetivo do jogo é pontuar usando um bastão, rebatendo a bola que o adversário lançar (conhecido como pitcher) e em seguida, correr e passar nas quatros bases do campo, caso o lançador consiga correr as quatro bases, é concluído um home run, que marcará um ponto.</li>
            <li>Innings: A partida é dividida em nove innings. Cada equipe faz uma rodada de ataque e uma de defesa em cada inning. Pode haver entradas adicionais se o jogo estiver empatado após nove innings.</li>
          </ul>
        </div>
        <div id="futebol">
          <h2>Futebol</h2>
          <p>Sendo o esporte mais popular do mundo, o futebol moderno teve sua origem na Inglaterra por volta do século XIX, mas é discutido que a sua origem teve início na antiguidade, havendo relatos de que era praticado um esporte muito semelhante ao futebol nas civilizações antigas.</p>
          <p>O primeiro futebol organizado surgiu na Inglaterra, onde diversas escolas e clubes passaram a adotar regras específicas para o jogo. As regras do futebol são atribuídas a diferentes pessoas e instituições, mas as Regras de Cambridge de 1848 e as Regras de Sheffield de 1858 desempenharam um papel fundamental na padronização do jogo. Em 1863, foi criada a Football Association (FA), a primeira entidade a regulamentar o futebol.</p>
          <p>A popularidade do futebol se espalhou rapidamente na Inglaterra e depois em todo o mundo. Com a criação de ligas, copas e seleções ao redor do mundo, o esporte transcende fronteiras e se tornou uma paixão global. Nesse processo, muitos jogadores se destacaram e deixaram uma marca indelével na história do futebol como o Pelé, jogador brasileiro que foi referência no futebol e no mundo, conquistou diversos troféus e títulos vestindo a camisa da seleção brasileira, ele é considerado por muitos o maior atleta de todos os tempos. Maradona, jogador argentino também foi é referência no esporte, conquistando diversos títulos, entre eles, a Copa do Mundo de 1986, liderando a conquista, ele e Pelé deixaram um legado enorme para o futebol de hoje.</p>
          <p><strong>Regras</strong></p>
          <ul>
            <li>Equipe: Cada equipe conta com 11 jogadores em campo, incluindo um goleiro. A equipe poderá ter jogadores substitutos em seu banco.</li>
            <li>Tempo de jogo: Uma partida de futebol é dividida em dois tempos, cada tempo com duração de 45 minutos, com intervalo de 15 minutos entre eles. Em alguns jogos, o tempo pode ser prorrogado por motivos como acréscimos ou prorrogação.</li>
            <li>Objetivo: O objetivo do jogo é marcar um gol fazendo a bola cruzar a linha de gol do adversário.</li>
            <li>Bola em jogo: O jogo começa com um pontapé inicial no centro do campo. A bola está em jogo durante a maior parte do jogo, a menos que cruze a linha lateral ou final ou o árbitro interrompa o jogo.</li>
            <li>Impedimento: A regra do impedimento proíbe um jogador de estar mais próximo da linha de gol do adversário do que a bola e o penúltimo defensor quando a bola é passada para ele.</li>
            <li>Falta: Uma falta ocorre quando um jogador empurra, segura, chuta ou comete uma falta sobre um oponente. O árbitro marcará a falta e concederá cartão amarelo ou vermelho dependendo da gravidade.</li>
            <li>Escanteios e tiros de meta: Um escanteio é concedido quando a bola é tocada por um jogador adversário e cruza a linha final. Uma reposição é concedida quando a bola cruza a linha lateral após ser tocada por um jogador adversário. Após a bola cruzar a linha de gol, o goleiro adversário chuta a bola de volta para o campo de jogo e aceita o tiro de meta.</li>
            <li>Pênaltis: Se uma falta for cometida dentro da área de pênalti da equipe defensora, será concedido um pênalti e o jogador chuta a bola da área de pênalti em direção ao gol.</li>
            <li>Cartões amarelos e vermelhos: Os cartões amarelos são emitidos pelos árbitros para alertar os jogadores sobre condutas antidesportivas ou faltas mais graves. Dois cartões amarelos resultam em cartão vermelho, o que significa que o jogador é expulso. Para violações graves, também poderá ser emitido um cartão vermelho.</li>
            <li>Fora de campo: Quando a bola cruza completamente a linha lateral ou final, é considerada fora de campo. Deve entrar novamente no jogo de acordo com as regras.</li>
          </ul>
        </div>
        <div id="futAmericano">
          <h2>Futebol Americano</h2>
          <p>Mais conhecido como football nos Estados Unidos, o Futebol Americano é um esporte em equipe de muito contato físico, ele é extremamente popular entre os Estadunidenses, sendo ele o esporte mais popular dos EUA.</p>
          <p>O esporte surgiu através de uma partida entre a Universidade de Harvard e a Universidade de Yale, a partida foi feita por volta do século XIX. A partida feita por essas faculdades não tinha regras fixas, cada faculdade tinha seu jeito de jogar e suas regras, assim, a Universidade de Harvard jogava a partir das regras de Rugby, enquanto a de Yale jogava de uma forma mais parecida com o futebol europeu, as regras e modo de jogo das universidades tinham alternância a cada partida, para o jogo ser mais justo, já que não havia regras universais até então. Através de um acordo feito entre as faculdades, a Yale assimilou as regras de rugby enquanto Harvard adotou o modo de correr com a bola. No ano de 1876, foi criada a primeira organização deste esporte, chamada de "Intercollegiate Football Association" fundada por Harvard, Yale, Columbia e Princeton, nesta organização as regras estabelecidas eram basicamente as regras de rugby, com mudanças nas partes de pontuação. </p>
          <p>O esporte como todos os outros, têm jogadores que se destacam e se tornam referência na modalidade, um deles é o Tom Brady, considerado o GOAT (Greatest of All Time) do esporte, o ex-jogador possui seis títulos da NFL, liderou o time New England Patriot no qual atuou 18 anos à nove disputas no Super Bowl, que é a final do campeonato NFL.  </p>
          <p><strong>Regras:</strong></p>
          <ul>
            <li>Campo: O jogo é disputado em um campo de grama natural ou artificial, com 91,44 metros de comprimento e 48,76 metros de largura.</li>
            <li>Objetivo: O objetivo do jogo é somar o maior número de pontos, e isso é feito quando a equipe chega na endzone do time adversário, marcando um touchdown que vale seis pontos, após o touchdown o time tem direito de fazer uma jogada extra por um chute na entre a trave com um formato “Y”, o objetivo do time adversário é impedir que o time avança para a sua endzone, essa é a parte de defesa do jogo.</li>
            <li>Equipe: A equipe de um time de futebol americano é composta por 53 jogadores no total, e desses jogadores,11 estarão em campo. Um time reveza alternadamente entre ataque e  defesa.</li>
            <li>Duração da partida: A partida dura quatro quartos de 15 minutos, o tempo pode variar dependendo da NFL, no caso de empate, também pode acontecer um tempo extra.</li>
            <li>Safety: Um safety ocorre quando o jogador é derrubado na própria endzone, dando dois pontos e a posse de bola para o time adversário.</li>
            <li>Field Goal: É quando a equipe tenta fazer um ponto chutando a bola entre a trave adversária de onde a jogada anterior tinha terminado.</li>
          </ul>
        </div>
        <div id="tenis">
          <h2>Tênis</h2>
          <p>O Tênis é um dos esportes mais antigos que existem. Assim como outros esportes, existem muitas histórias que tentam contar sua origem. Alguns estudos mostram que no século V, os egípcios e os persas passaram a praticar uma modalidade vista por muitos como a base do esporte.</p>
          <p>Naquela época, o esporte era praticado em campos e não existia a presença de uma raquete, os jogadores tinham que rebater a bolinha com as próprias mãos.</p>
          <p>O tênis de quadra é um esporte praticado por duas e até quatro pessoas, em uma quadra dividida por uma rede. O objetivo é fazer com que a bolinha toque o chão da quadra do oponente mais de uma vez sem que ela consiga ser devolvida. Além disso, o ponto também pode ocorrer caso o jogador tente devolver a bolinha e ela caia fora da linha dos limites da quadra.</p>
          <p>No Brasil, o esporte se fez presente no século XIX e o início ocorreu junto à colonização. Alguns relatos históricos contam que os responsáveis pela disseminação do esporte no país foram os ingleses e também os franceses.
Os imigrantes mostraram o esporte para os colonos portugueses que estavam instalados nos estados de São Paulo e Rio de Janeiro. Desde então, o número de adeptos cresceu bastante e, como divulgado pela ITF, cerca de 2 milhões de brasileiros o praticam, sendo que, aproximadamente, 33 mil possuem registro na federação como atletas profissionais.</p>
          <p>Um jogo de tênis padrão é dividido em 3 ou 5 sets, sendo que a vitória acontece quando um dos dois jogadores consegue ter uma diferença de 2 games de vantagem sobre o adversário.</p>
          <p>Os games, por sua vez, são disputados por pontos que são contados seguindo a sequência de 0, 15, 30 e 40. Caso o jogo empate em 40 a 40, os jogadores continuam a disputa até um dos jogadores fazer dois pontos seguidos, assim, ganhando o game no set.</p>
          <p>O Tie Break acontece quando o jogo apresenta empates de 5 a 5 games durante o set. O jogo continua e o primeiro a fazer 7 pontos ou mais é o vencedor, porém, não se deve esquecer que a vitória só acontece quando um jogador chegar nessa pontuação com dois pontos de diferença.</p>
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default AbaCampo;
