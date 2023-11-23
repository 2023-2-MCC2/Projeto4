import './style.css';
import Aquatico from '../../componentes/AquaticoImg';
import Botao1 from '../../componentes/Botao1A';
import Botao2 from '../../componentes/Botao2A';
import Botao3 from '../../componentes/Botao3A';
import Botao4 from '../../componentes/Botao4A';
import ScrollToNadoS from '../../componentes/Card1A';
import ScrollToNatacao from '../../componentes/Card2A';
import ScrollToPolo from '../../componentes/Card3A';
import ScrollToVela from '../../componentes/Card4A';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';



function AbaAqua() {
  return (
    <div className="App">
        <Header></Header>
      <header className="App-header">
        <Botao1></Botao1>
        <Botao2></Botao2>
        <Botao3></Botao3>
        <Botao4></Botao4>
      </header>
      <div className="imagemTopo">
      <Aquatico></Aquatico>
      </div>
      <div className="Cards">
        <ScrollToNadoS></ScrollToNadoS>
        <ScrollToNatacao></ScrollToNatacao>
        <ScrollToPolo></ScrollToPolo>
        <ScrollToVela></ScrollToVela>
        </div>
      <body className="conteudo">
        <div id="nSincronizado">
          <h2>Nado Sincronizado</h2>
          <p>Inicialmente chamado de Balé Aquático, o Nado Sincronizado surgiu na década de 1920 e a professora norte-americana Katherine Curtis foi quem formalizou sua criação do esporte, mas foi o nadador Norman Ross que oficializou o termo “nado sincronizado” durante a Feira Mundial de Chicago ao se referir a uma apresentação feita por alunos de Katherine, 1933. </p> 
          <p>No Brasil,  a nadadora Maria Lenk trouxe o esporte para o país após ter contato com ele em suas participações em eventos esportivos internacionais, montando uma equipe no Rio de Janeiro em 1943. O nado sincronizado apareceu nos jogos olímpicos em 1948, em Londres e teve suas regras oficializadas pela FINA (federação internacional de natação) em 1952. </p>
          <p>A prova de Nado Sincronizado consiste em 2 rotinas, a técnica e livre, realizando movimentos corporais (coreografias) dentro da piscina. </p>
          <p>A rotina com técnica consiste em:  a nadadora Maria Lenk, que introduziu a modalidade no país após ter contato com ela em suas participações em eventos esportivos internacionais.</p>
          <p>A rotina livre consiste em:  tempo de prova maior, sendo de 3 minutos para os duetos e de 4 minutos para as equipes e não tem movimentos obrigatórios e nem restrições. 
Alguns movimentos básicos do “Ballet Aquático” são:</p>
          <ul>
            <li>Ação em cadência: consiste na realização idêntica do mesmo movimento pelas atletas, uma a uma, em sequência, de modo a formar um “efeito cascata”.</li>
            <li>Alçada de tronco: configura uma subida rápida do atleta até a superfície da água, com a cabeça emergindo antes do restante do corpo e em posição vertical.</li>
            <li>Can Can: nesse movimento, a atleta permanece deitada na superfície da água com uma perna levantada perpendicularmente ao corpo.</li>
            <li>Carpa de frente: as movimentações na posição carpada correspondem a figuras em que os quadris são flexionados em um ângulo de 90°, com as pernas ao nível da superfície e o restante do corpo em imersão.</li>
            <li>Flamingo: essa movimentação consiste em manter o corpo na posição horizontal, com o quadril levemente imerso e o rosto na superfície. Além disso, a atleta deve estender uma perna na superfície, enquanto mantém a outra flexionada junto ao peito, formando assim a figura que representa a posição característica do flamingo.</li>
            <li>Guindaste: essa posição é caracterizada pela inversão do eixo vertical, em que a atleta fica com o corpo ereto, sustentando as duas pernas na superfície, ambas estendidas, de modo a formar um ângulo de 90° entre elas.</li>
          </ul>
        </div>
        <div id="natacao">
          <h2>Natação</h2>
          <p>A natação é  considerada um dos exercícios mais completos por movimentar grande parte dos músculos e articulações do corpo, oferecendo grandes benefícios à saúde de seus praticantes, pois, também o risco de lesões que a natação oferece é pequeno, já que a água amortece os impactos.</p>
          <p>A natação começou em forma primitiva para o ser humano. Começou como práticas realizadas pelos humanos com a necessidade de sobrevivência, com a pesca e a superação de obstáculos como lagos, rios e mares para encontrar locais férteis, no caso dos povos caçadores-coletores e nômades. Posteriormente, na Grécia Antiga, a natação estabeleceu laços com saúde e condicionamento físico.</p>
          <p>Oficialmente, o esporte surge no Brasil com o Clube de Natação da União de Regatas Fluminense. Em 1898, esse clube organizou o primeiro campeonato brasileiro de natação, no Rio de Janeiro, disputado na modalidade 1.500 metros livres. A prova consistiu na travessia entre a Fortaleza de Villegagnon e a praia de Santa Luzia, tendo Abrahão Saliture como campeão, e o Brasil passou a disputar a natação olímpica em 1920.</p>
          <p>Esses são os estilos de nados existentes: </p>
          <ul>
            <li>Crawl: também chamado de nado livre, esse estilo é considerado o mais eficiente para alcançar velocidade na água. Nele, as pernas impulsionam o corpo com um movimento de “tesoura”, e as movimentações de braços são alternadas e aceleradas. Outra característica desse estilo é a respiração lateral, que pode ter seu ritmo variado, conforme a técnica de respiração utilizada.</li>
            <li>Peito: esse estilo é mais lento em relação aos demais, devido à recuperação (movimentação de braço) que ocorre em imersão. Em contrapartida, é o estilo de nado com maior potencial de força. Nele, os braços realizam um movimento de “remada”, caracterizado pela rotação de cotovelo. A braçada é complementada pela pernada, caracterizada como um “chute” da água com a parte interna dos pés. Juntas, essas duas movimentações impulsionam o deslocamento.</li>
            <li>Borboleta: o estilo borboleta é o tipo de nado mais atrativo e também o de maior complexidade de execução do movimento. Ele deriva do estilo peito, com movimentação de braços simultâneos acima da superfície da água, enquanto as pernas são movimentadas em ondas, simulando o nado “sereia”.</li>
            <li>Costas: Esse estilo é caracterizado pela posição decúbito dorsal, o que exige do nadador um senso de direção apurado, para manter o alinhamento e fluxo do movimento. A dinâmica do nado é semelhante à do estilo crawl, com giro alternado de braços e pernas simultâneas. No entanto, as mãos devem puxar a água, impulsionando o movimento.</li>
          </ul>
          <p>A natação compõe os Jogos Olímpicos da Era Moderna desde sua primeira edição, em Atenas 1896. Com isso, o esporte passa a se reconfigurar, resultando nas provas que hoje compõem a natação olímpica. São elas:</p>
        <ul>
          <li>50 metros crawl (nado livre);</li>
          <li>100 metros crawl (nado livre);</li>
          <li>200 metros crawl (nado livre);</li>
          <li>400 metros crawl (nado livre);</li>
          <li>800 metros crawl (nado livre) feminino;</li>
          <li>1500 metros crawl (nado livre) masculino;</li>
          <li>100 metros costas;</li>
          <li>200 metros costas;</li>
          <li>100 metros peito;</li>
          <li>200 metros peito;</li>
          <li>100 metros borboleta;</li>
          <li>200 metros borboleta;</li>
          <li>200 metros medley;</li>
          <li>400 metros medley;</li>
          <li>Revezamentos 4 x 100 metros livres;</li>
          <li>Revezamentos 4 x 200 metros livres;</li>
          <li>Revezamentos 4 x 100 metros estilo;</li>
          <li>Maratona de 10km.</li>
        </ul>
        <p>Conforme o grande número de provas de natação, a FINA estabelece regras para o cumprimento ideal dessas provas, como:</p>
        <ul>
          <li>Nas provas de livre, peito, borboleta e medley, a partida é iniciada por meio de salto (mergulho), saindo do bloco de partida, ao sinal do juiz;</li>
          <li>A partida para as provas de costas e revezamento medley é iniciada dentro da água, e qualquer nadador que parta antes do sinal de partida é desclassificado;</li>
          <li>Todas as provas individuais devem ser separadas por sexo;</li>
          <li>Em todas as provas, o nadador deve fazer contato físico com a borda na virada. Por sua vez, a virada deve ser feita contra a borda da piscina, e não é permitido andar ou tomar impulso no fundo da piscina durante a prova;</li>
          <li>Os membros de uma equipe de revezamento e sua ordem de competir devem ser definidos e apresentados aos árbitros antes da prova;</li>
          <li>Qualquer membro da equipe de revezamento pode competir em uma prova somente uma vez;</li>
          <li>Com exceção das provas medley individual ou revezamento medley, nas provas de nado livre, os nadadores podem nadar qualquer estilo diferente de costas, peito e borboleta;</li>
          <li>Para iniciar o nado costas, os competidores devem estar alinhados à borda da piscina, na água, de frente para a cabeceira de saída, com ambas as mãos colocadas nos suportes de agarre;</li>
          <li>A partir da saída e durante a prova, o ciclo do nado peito deve ser uma braçada e uma pernada, nessa ordem. Além disso, todos os movimentos dos braços devem ser simultâneos e no mesmo plano horizontal, sem movimentos alternados;</li>
          <li>No estilo borboleta, ambos os braços devem ser levados simultaneamente à frente por sobre a água e trazidos para trás por baixo da água durante todo o percurso. Portanto, todos os movimentos para cima e para baixo das pernas devem ser simultâneos;</li>
          <li>Na prova de medley individual, o nadador nada os quatro nados na seguinte ordem: borboleta, costas, peito e livre. Já nas provas de revezamento medley, os nadadores nadam na seguinte ordem: costas, peito, borboleta e livre. Nesse estilo, cada nado deve percorrer um quarto (1/4) da distância.</li>
        </ul>
        </div>
        <div id="polo">
          <h2>Polo Aquático</h2>
          <p>O polo aquático é o único esporte coletivo disputado em ambiente aquático. Esse esporte tem muita semelhança com o handebol, uma vez que a bola é passada com as mãos e arremessada ao gol. Como esporte, o polo aquático é jogado em piscinas e visa a marcação de gols sobre o adversário. Para isso, as equipes devem se organizar para realizar gols em um tempo de até 30 segundos cada. Por sua vez, o jogo é organizado em quatro tempos de oito minutos cada. Assim, ao final do jogo, a equipe com maior pontuação é vencedora. </p>
          <p>O polo aquático compõe os Jogos Olímpicos da Era moderna desde a segunda edição, Paris 1900. Entretanto, a modalidade feminina do esporte só passou a compor as Olimpíadas cem anos depois, na edição Sydney 2000. As seleções da Grã-Bretanha e Hungria são as equipes com mais vitórias e notoriedade no esporte. Além disso, a edição dos Jogos Olímpicos Rio 2016 foi a primeira a contar com uma equipe feminina sul-americana.</p>
          <p>As principais regras desse esporte são:</p>
          <ul>
            <li>O jogo deve ocorrer em uma piscina com distância de 20 a 25 metros entre os gols, para a modalidade feminina, e de 20 a 30 metros para a masculina, variando de 10 a 20 metros em largura;</li>
            <li>A duração de um jogo é de 32 minutos, divididos em quatro tempos de 8 minutos cada;</li>
            <li>Cada equipe é composta por 7 jogadores de linha e pode ter até 6 jogadores reserva;</li>
            <li>Os jogadores de cada equipe são diferenciados pelas cores dos gorros;</li>
            <li>A bola pode ser conduzida de qualquer modo, exceto com as duas mãos;</li>
            <li>Não é permitido golpear a bola com punho (mão fechada);</li>
            <li>Apenas o goleiro pode pisar no chão durante o jogo, segurar a bola com as duas mãos e golpeá-la com os punhos;</li>
            <li>O tempo de 30 segundos destinado à finalização da jogada é reiniciado sempre que uma equipe recupera a posse de bola ou marca um gol;</li>
            <li>Vence a equipe que tiver a maior pontuação ao final do jogo. Porém, em caso de empate, há prorrogação do tempo de jogo, variando conforme a partida disputada. Persistindo o empate é feita a cobrança de pênaltis.</li>
          </ul>
          </div>
        <div id="vela">
          <h2>Vela</h2>
          <p>A vela é um esporte náutico praticado em barcos a vela e movidos exclusivamente pela força do vento. As competições seguem sendo organizadas em espaços mais abertos, como o mar, tendo como seus equipamentos são mastros, retrancas, enroladores, velas mestras, burro, capotas, cabos náuticos entre outros acessórios para o barco.</p>
          <p>No Brasil, a vela desembarcou no fim do século XIX, trazida por descendentes de europeus. Em 1906, foi fundado o Iate Clube Brasileiro, primeiro clube dedicado ao esporte, no Rio de Janeiro. A primeira prova nacional foi disputada em 1935 e recebeu o nome de Troféu Marcílio Dias. Em 1941, foi fundada a Federação Brasileira de Vela e Motor (CBVM), que controlou o esporte ao nível nacional até 2007, quando, devido ao acúmulo de dívidas, o Comitê Olímpico Brasileiro (COB) interveio na entidade. Em 2013, foi criada a Confederação Brasileira de Vela (CBVela), nova administradora da modalidade no país.</p>
          <p>Há diversas classes na Vela, como Finn, 470, 49er, Yngling, Tornado, RS:X, Star, Laser… são realizadas diversas regatas ao longo da competição, sendo que os atletas podem descartar o pior resultado. Na Vela, quanto melhor a colocação, menos ponto você acumula, pois o velejador com menos pontos no final do campeonato, é considerado o campeão. </p>
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default AbaAqua;
