import './style.css';
import Ringue from '../../componentes/RingueImg';
import Botao1 from '../../componentes/Botao1R';
import Botao2 from '../../componentes/Botao2R';
import Botao3 from '../../componentes/Botao3R';
import Botao4 from '../../componentes/Botao4R';
import ScrollToBoxe from '../../componentes/Card1R';
import ScrollToJiu from '../../componentes/Card2R';
import ScrollToLLivre from '../../componentes/Card3R';
import ScrollToMThai from '../../componentes/Card4R';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';




function AbaRingue() {
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
        <Ringue></Ringue>
      </div>
      <div className="Cards">
        <ScrollToBoxe></ScrollToBoxe>
        <ScrollToJiu></ScrollToJiu>
        <ScrollToLLivre></ScrollToLLivre>
        <ScrollToMThai></ScrollToMThai>
      </div>
      <body className="conteudo">
        <div id="boxe">
          <h2>Boxe</h2>
          <p>O boxe, também conhecido como nobre arte, é um esporte de combate que envolve o confronto direto entre dois pugilistas. Originário da Grécia Antiga, o boxe moderno ganhou popularidade no século XVIII na Inglaterra, tornando-se um esporte de prestígio e entretenimento em todo o mundo.</p>
          <p>O esporte destaca as habilidades em destreza, força, resistência, posicionamento, estratégia dos atletas que praticam desporto. Usando luvas de proteção, os jogadores se enfrentam em um ringue, que possui um formato quadrado e envolto por cordas, o objetivo do esporte é marcar pontos através de golpes efetivos e bem sucedidos, e só é marcado se a região do golpe acertado for na parte da frente do corpo ou na cabeça, isso é analisado pelos juízes que analisam suas estratégias e suas técnicas ofensivas e defensivas, levando tudo isso em consideração na hora de decidir a vitória do jogador quando não houver nocaute. O “KO”, conhecido como nocaute, é uma alternativa de vitória, quando o jogador consegue derrubar o outro, e faz com que ele não consiga se levantar numa contagem de 10 segundos feita por um árbitro, o jogador ganha. Uma outra opção de vitória é a desistência do oponente.</p>
          <p><strong>Regras:</strong></p>
          <p>Ringue: O ringue de boxe deve possuir as medidas de 6,10 metros para cada lado.</p>
          <p>Rounds: O jogo é composto por rodadas(rounds), geralmente são 3 rounds de 2 a 3 minutos cada.</p>
          <p>Proteção:</p>
          <ul>
            <li>Luvas de boxe: os jogadores devem usar luvas de boxe para proteger as mãos e o rosto do oponente.</li>
            <li>Protetor bucal: deve-se usar um protetor bucal para proteger a boca e os dentes dos atletas em ringue.</li>
            <li>Protetor genital: se usa para proteger a área genital de sofrer um golpe do oponente.</li>
          </ul>
        </div>
        
        <div id="jiu">
          <h2>Jiu-jitsu</h2>
          <p>O Jiu-Jitsu é caracterizado pela ênfase na técnica e não na força, tornando-o uma ferramenta eficaz para indivíduos de todas as idades e níveis de habilidade. As regras do Jiu-Jitsu são projetadas para criar um campo de jogo justo e seguro. Os competidores buscam ganhar pontos controlando a posição e executando finalizações bem executadas. Estratégia e astúcia são tão importantes quanto a força física e conferem ao esporte uma dinâmica única.</p>
          <p>O esporte é uma arte marcial que se originou no Japão e encontrou terreno fértil para prosperar no Brasil, onde é mais do que um esporte; tornou-se parte intrínseca da cultura e da identidade nacional. As raízes do Jiu-Jitsu no Brasil remontam ao início do século 20, quando o mestre japonês Mitsuyo Maeda introduziu a arte no país. Porém, foi pelas mãos da família Gracie que o Jiu-Jitsu se desenvolveu e se tornou uma disciplina única.</p>
          <p>O Brasil é uma potência no cenário internacional do Jiu-Jitsu, com atletas brasileiros conquistando títulos e mostrando o melhor de seus desempenhos nas competições que acontecem ao redor do mundo. O país é palco de eventos de muita relevância, como o Campeonato Brasileiro e o Mundial de Jiu-Jitsu, que atraem competidores e entusiastas de todas as partes.</p>
          <p>Essa modalidade vai além do confronto e disputa, ela ajuda a melhorar a confiança em si mesmo, mostrar como se defender em situações específicas, melhorar seus hábitos e a sua saúde, entre outros benefícios que o esporte traz. O esporte é uma fonte de conhecimento e de exercícios.</p>
          <br />
          <p><strong>Regras:</strong></p>
          <ul>
            <li>Ringue: O ringue onde os atletas disputam geralmente tem o formato quadrado, tendo uma área que varia entre 64 a 100 metros quadrados.</li>
            <li>Pontuação: Os variam entre  2, 3 e 4 pontos, eles são dados dependendo de onde, e como foi o golpe, se analisa região golpeada e técnica.</li>
            <p><strong>4 pontos:</strong> é dado pela pegada de costas e montada, tendo controle sobre o oponente</p>
            <p><strong>3 pontos:</strong> Passagem de guarda, quando quando o atleta supera a guarda do adversário</p>
            <p><strong>2 pontos:</strong> Queda, domínio com o joelho na barriga e raspagem</p>
            <li>Equipamentos: Os equipamentos utilizados num confronto de Muay Thai.</li>
            <li>Kimono: Uniforme usado na prática do esporte, tendo suas cores variando entre azul, preto ou branco, que são as cores padrões estabelecidas pelo esporte.</li>
            <li>Obi: O Obi é uma faixa utilizada por cima do kimono, nela mostra a graduação do atleta. O tamanho da faixa varia entre 4 a 5 cm.
              As faixas tem aumento de nível em ordem crescente:
            </li>
            <p><strong>Branca</strong></p>
            <p><strong>Amarela</strong></p>
            <p><strong>Laranja</strong></p>
            <p><strong>Verde</strong></p>
            <p><strong>Azul</strong></p>
            <p><strong>Roxa</strong></p>
            <p><strong>Marrom</strong></p>
            <p><strong>Preta</strong></p>
            <p><strong>Coral</strong></p>
            <p><strong>Vermelha</strong></p>
            <li>Faltas: As faltas são classificadas como faltas de combatividade, graves e gravíssimas. As faltas de combatividade e combatividade tem uma tolerância, após um atleta receber uma segunda punição, o adversário recebe 1 pontos, na terceira punição o adversário recebe 2 pontos e na quarta gera a desclassificação do atleta. A falta gravíssima tem como consequência a desclassificação direta do atleta.</li>
          </ul>
        </div>

        <div id="lutalivre">
          <h2>Luta livre</h2>
          <p>A luta livre é um esporte de combate em que dois lutadores tentam ganhar controle físico sobre o outro. Existem vários tipos de luta livre, mas o olímpico é o mais conhecido mundialmente.</p>
          <p>A luta livre chegou no brasil como forma de entretenimento e acabou se tornando profissional, conseguindo reconhecimento por volta do século XX.</p>
          <p>Nas décadas de 1960 e 1970, o esporte acabou ganhando destaque nas televisões com competidores encantadores e performances que conquistaram o público.
            Ted Boy Marino e Éder Jofre tornaram-se ídolos, ajudando popularizar a luta livre no Brasil.
          </p>
          <p><strong>Regras:</strong></p>
          <ul>
            <li>O que é permitido: lutadores usam apenas os braços e a parte superior do corpo para atacar e só podem segurar as mesmas partes de seus oponentes.os lutadores podem também usar as pernas e segurar os oponentes acima ou abaixo da cintura.</li>
            <li>Rounds: As lutas nos Jogos Olímpicos consistem em três rounds, cada um com duração de dois minutos, com os lutadores tentando garantir uma vitória "melhor de dois em três". Há um intervalo de 30 segundos entre os períodos.</li>
            <li>Pontuação: Os movimentos recebem pontos de acordo com a dificuldade, um único movimento pode receber de 1-5 pontos. Os lutadores marcam pontos executando golpes legais, arremessos, quedas, manobrando o oponente para expor suas costas ao tatame por vários segundos ou executando reversões. Os lutadores podem ganhar pontos se o oponente cometer infrações, como imobilizações ilegais, tentar fugir de uma imobilização em vez de defendê-la, ser muito negativo ou passivo demais. Essas infrações geralmente acabam em advertências, e o acúmulo de três durante uma luta resulta na desqualificação automaticamente do lutador que cometeu as infrações.</li>
            <li>Punição: As punições acontecem quando há puxão de cabelo, estrangulamentos, dedo nos olhos e golpes baixos, esses atos geram a desclassificação do atleta.</li>
          </ul>

        </div>
        <div id="mthai">
          <h2>Muay Thai</h2>
          <p>O Muay Thai é originário da Tailândia e tem uma história secular de tradição militar e cultura local.
            Por muito tempo, foi uma habilidade necessária para os guerreiros tailandeses.
            Com o tempo, o Muay Thai evoluiu para uma forma de entretenimento e hoje é altamente considerado em todo o mundo devido às suas origens históricas e eficácia como arte marcial.
            Esta é a filosofia do esporte: não se trata apenas de luta, trata-se de autoaperfeiçoamento, disciplina e respeito, permitindo que os atletas se tornem pessoas melhores e mais sábias.
          </p>
          <p>O Muay Thai é conhecido como a “arte das oito armas” porque usa punhos, cotovelos, joelhos e pés ao mesmo tempo.
            É um tipo de arte marcial tailandesa que exala a cultura tailandesa.
            Este esporte é uma mistura de graça e brutalidade, e os atletas buscam melhorar não só a força física, mas também a mente e a técnica.
          </p>
          <p>No Brasil, o Muay Thai tem raízes profundas na tradição tailandesa, mas se consolidou como uma expressão única de força, técnica e resiliência.
            Essa arte marcial é cultuada entre os atletas brasileiros, deixando sua marca em academias e ringues de todo o país.
            No final do século 20, o Muay Thai começou a crescer em popularidade no país, atraindo não apenas ávidos artistas marciais, mas também entusiastas que buscavam técnicas eficazes de condicionamento corporal e autodefesa.
          </p>
          <br />
          <p><strong>Regras:</strong></p>
          <ul>
            <li>Ringue e Cage: O esporte é praticado em ringues ou em cages, que seria um ringue de 6 lados, o tipo de arena muda dependendo o campeonato disputado.</li>
            <li>Rounds e Duração: A quantidade de rounds por jogo geralmente é 5 rounds, duram 3 minutos cada um deles.</li>
            <li>Intervalo: O intervalo é feito entre um round e outro, dando um intervalo de 1 minuto para descansarem e falar com os técnicos.</li>
            <li>Segurança:: Os jogadores devem usar luvas de Muay Thai, bandagens nas mãos, caneleiras e dependendo da organização da competição, uma proteção genital.</li>
            <li>Faltas: Ataques com o adversário já derrubado, golpes da cintura para baixo, agarrar pelas cordas do ringue são atitudes não toleradas.</li>
          </ul>
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default AbaRingue;
