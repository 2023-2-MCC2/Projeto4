import './style.css';
import Pista from '../../componentes/PistaImg';
import Botao1 from '../../componentes/Botao1P';
import Botao2 from '../../componentes/Botao2P';
import Botao3 from '../../componentes/Botao3P';
import Botao4 from '../../componentes/Botao4P';
import ScrollToAPeso from '../../componentes/Card1P';
import ScrollToCorrida from '../../componentes/Card2P';
import ScrollToLanDar from '../../componentes/Card3P';
import ScrollToSaltoVara from '../../componentes/Card4P';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';






function AbaPista() {
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
        <Pista></Pista>
      </div>
      <div className="Cards">
        <ScrollToAPeso></ScrollToAPeso>
        <ScrollToCorrida></ScrollToCorrida>
        <ScrollToLanDar></ScrollToLanDar>
        <ScrollToSaltoVara></ScrollToSaltoVara>
      </div>
      <body className="conteudo">
        <div id="aPeso">
          <h2>Arremesso de Peso</h2>
          <p>O arremesso de peso é um esporte que tem suas origens na Grécia antiga, onde fazia parte  do grande evento de esportes chamado Jogos Olímpicos. No entanto, ganhou popularidade moderna como uma competição atlética e de habilidades. O esporte consiste em lançar bolas de metal o mais longe possível utilizando técnicas específicas da modalidade.</p>
          <p>A conscientização e a participação no arremesso de peso aumentaram no Brasil. Os atletas brasileiros têm contribuído para o desenvolvimento e conhecimento do esporte no país com os desempenhos destacados em competições nacionais e internacionais. A descoberta de talentos e o investimento na infraestrutura do esporte têm sido elementos-chave deste desenvolvimento.</p>
          <p>Alguns atletas brasileiros que se destacam no esporte alcançaram resultados notáveis ​​e representaram seu país em eventos de prestígio. Técnica e resistência são elementos essenciais para o sucesso no arremesso de peso, e os competidores brasileiros demonstraram um ótimo domínio desses aspectos.</p>
          <p>Além disso, os eventos esportivos locais ajudaram a popularizar o arremesso de peso, proporcionando oportunidades para jovens talentos participarem e se desenvolverem no esporte. À medida que a visibilidade e o apoio aumentaram, o interesse público cresceu e a participação no desporto aumentou em todo o país.</p>
          <p>Em resumo, o arremesso de peso no Brasil vive uma fase de crescimento e reconhecimento, com atletas brasileiros competindo em alto nível e contribuindo para a história e o desenvolvimento deste esporte contagiante.</p>
          <p><strong>Regras:</strong></p>
          <ul>
            <li>Bola de metal: A bola de metal possui 7,26kg na categoria masculina, e 4kg na feminina.  A bola é o objeto que será lançado o mais longe que puder.</li>
            <li>Área: O lançamento do peso é feito dentro de um círculo com diâmetro de 21,33 metros. A zona de lançamento é cercada pela “toe board”, área na qual não se pode tocar no momento do lançamento.</li>
            <li>Lançamento do peso: Dentro da área de lançamento, o arremesso é feito a partir de uma técnica que consiste em deixar o peso junto ao queixo e empurrando o peso para frente, o projetando.</li>
            <li>Faltas:</li>
            <p>Sair da área de lançamento durante o arremesso.</p>
            <p>Tocar a borda do círculo.</p>
            <li>Número de tentativas: as tentativas alternam entre 3 a 6 vezes, esse regulamento é baseado no campeonato disputado.</li>
          </ul>
        
        
        </div>
        <div id="corrida">
          <h2>Corrida</h2>
          <p>A corrida, uma prática que ecoa através dos tempos, tornou-se uma paixão universal, transcendentemente humana. No Brasil, essa atividade atlética ganhou destaque, moldando-se como um fenômeno que vai além da competição, incorporando valores de saúde, superação e comunidade.</p>
          <p>Nos caminhos sinuosos das cidades e nas trilhas naturais do país, a corrida se tornou um movimento, reunindo pessoas de diferentes origens. Nesse vasto universo de corredores brasileiros, surgem histórias inspiradoras de dedicação e conquistas. Atletas como João Silva e Maria Oliveira personificam a resiliência, tornando-se figuras motivacionais para aspirantes a corredores em todo o país.</p>
          <p>As corridas de rua, como a icônica São Silvestre em São Paulo e a deslumbrante Meia Maratona do Rio de Janeiro, têm se destacado como eventos marcantes. Essas competições não são apenas sobre marcar recordes, mas também sobre a celebração da diversidade e inclusão, reunindo corredores de todas as idades e origens.</p>
          <p>A corrida no Brasil não é apenas uma atividade física; é uma celebração da pluralidade e uma expressão de unidade. Das metrópoles movimentadas às pequenas comunidades, as pessoas se reúnem nas pistas e trilhas, compartilhando a paixão por desafiar seus próprios limites e atingir metas pessoais.</p>
          <p>Com um clima diversificado, o Brasil oferece um terreno propício para a prática da corrida. Das praias ensolaradas do Nordeste às trilhas frescas das regiões serranas, cada corrida é uma jornada única, uma oportunidade de conectar-se com o ambiente e consigo mesmo.</p>
          <p>Assim, a corrida no Brasil vai além da busca por troféus. É uma experiência coletiva, um movimento que se estende para além das pistas. Cada passo dos corredores brasileiros não só marca distâncias, mas também deixa uma pegada duradoura na cultura, refletindo os valores de movimento, saúde e superação que unem as pessoas em uma jornada comum.</p>
          <p>A corrida tem várias provas diferentes essas são: A corrida de revezamento e a corrida com obstáculos.</p>
          <p><strong>Corrida de Revezamento:</strong></p>
          <p>A corrida de revezamento é um esporte que compete ao Atletismo. Ela consiste no transporte de um bastão, entre os corredores, durante a corrida. Sua criação consiste em duas narrativas, a dos Jogos Panatenaicos e a vinculada aos correios da Pérsia. </p>
          <p>Segundo a narrativa vinculada aos Jogos Panatenaicos, realizava-se nesses jogos uma prova em homenagem à Prometeu, deus que teria levado o fogo aos mortais. Assim, tochas eram revezadas no transporte, sem serem apagadas, até uma pira (fogueira) para, então, acendê-la. Posteriormente, por volta de 1880, a prova teria sido retomada por bombeiros nova-iorquinos que substituíram as tochas por bandeiras vermelhas, passadas a outros corredores ao fim de determinado trajeto.</p>
          <p>Já a narrativa vinculada aos correios da Pérsia conta que o rei Ciro, do império persa, ordenou a construção de cavalariças (e estábulos) no percurso das estradas do império. Seu intuito era acelerar as entregas das correspondências (bastões com mensagens dentro), diminuindo o tempo de transporte ao propor o revezamento entre os mensageiros. Assim, os mensageiros transportavam as correspondências de uma cavalariça a outra, passando-as a outros mensageiros.</p>
          <p>A World Athletics, que regulamenta o atletismo internacionalmente, baseia-se na narrativa vinculada às cavalariças persas. Já Confederação Brasileira de Atletismo (CBAt), a narrativa originária é aquela vinculada às Panatenéias. Mas, independente das narrativas, as duas entidades reconhecem que o surgimento das corridas de revezamento na modernidade está  atrelada a eventos beneficentes da década de 1980, organizados por bombeiros nova-iorquinos, como citado.</p>
          <p>Existem dois tipos de provas de corridas de revezamentos:</p>
          <ul>
            <li>Corrida de revezamento 4×100: nessa prova cada atleta deve percorrer 100 m conduzindo o bastão. Assim, durante o percurso total da prova, realizam o revezamento nas zonas de transição e revezamento, situadas entre 90 e 100 metros (1º zona), 190 e 210 metros (2ª zona) e 290 e 310 metros (3ª zona).</li>
            <li>Corrida de revezamento 4×400: nesse revezamento os atletas percorrem 400 m cada, ou seja, todos completam uma volta na pista de atletismo. Desse modo, há apenas uma zona de revezamento, que coincide com o local de início da prova. Além disso, nessa prova, após concluída a primeira volta, os atletas podem correr em outras raias que não aquela em que iniciaram a prova.</li>
          </ul>
          <p>A corrida de revezamento contém algumas regras, que são elas:</p>
          <ul>
            <li>O objetivo da corrida de revezamento é percorrer o trajeto da prova no menor tempo possível — ou na maior velocidade possível;</li>
            <li>A largada segue os comandos tradicionais das provas de corrida (“às suas marcas”, “prontos” e o aviso sonoro) e deve partir do bloco de saída, em posição abaixada. Caso o atleta queime a saída a equipe é desclassificada;</li>
            <li>Cada equipe de revezamento é composta por quatro atletas, que devem definir a ordem da corrida previamente à execução da prova. Sendo assim, ocorrerão três passagens de bastão durante a prova;</li>
            <li>O atleta ao iniciar a prova deve fazê-lo já em posse do bastão de revezamento. Desse modo, na dinâmica da corrida, os membros seguintes da equipe podem prosseguir somente quando estiverem de posse do bastão;</li>
            <li>O bastão deve ser um tubo liso oco circular de madeira ou metal. Além disso, deve ser colorido, de cor visivelmente distinta dos demais, composto por peça única, com peso mínimo de 50 g, diâmetro de 40 mm (com variação de 2 mm para mais ou para menos) e comprimento entre 0.28 mm e 0.30 mm;</li>
            <li>A transição do bastão deve ser feita nas zonas de passagem/revezamento (20 m). Caso ocorra fora dos limites dessa zona a equipe é desclassificada;</li>
            <li>Nas corridas de 4×100 m, os atletas podem utilizar a zona de transição (10 m) para organização do revezamento, desde que ocorra na zona de passagem. Nas provas de 4×400 m, no entanto, não há esse complemento;</li>
            <li>Não é permitido o uso de luvas, colas ou quaisquer outros materiais a fim de melhorar a pegada do bastão.</li>
          </ul>
          <p><strong>Corrida com Obstáculos:</strong></p>
          <p>A corrida de obstáculos surgiu na Grécia Antiga e possui provas de 2 mil e 3 mil metros com obstáculos, mas penas a segunda distância compõe sua disputa nas Olimpíadas, iniciada na edição de Paris 1920. Em cada volta na pista o praticante terá que saltar em quatro obstáculos e em um fosso de água. Os obstáculos possuem 91,4 cm para as provas masculinas, e 76,2 cm para disputas femininas. Eles devem ter 3,94m de largura e entre 80 kg a 100 kg de peso. E o fosso 3,66m de largura e estar fixado ao solo. O fosso é uma pequena piscina de superfície com o fundo inclinado e com a profundidade máxima de 76cm, que vai diminuindo gradativamente até chegar ao nível do solo.</p>
          <p>Algumas regras das Corridas com Obstáculos são:</p>
          <ul>
            <li>O número de voltas na pista de corrida varia conforme a disposição do fosso d’água na pista, dado que sua posição pode ser interna (raia de corrida 1) ou externamente (raia de corrida 8) relacionada a ela;</li>
            <li>A contagem dos saltos sobre obstáculos é iniciada somente após a linha de chegada ser passada pela primeira, ou seja, após o atleta ter completado meia volta na pista de corrida;</li>
            <li>A distância entre os obstáculos deve corresponder à quinta parte do comprimento normal de uma volta na pista de corrida;</li>
            <li>Um atleta não é desclassificado caso caia ou, eventualmente, derrube uma barreira, desde que não o faça intencionalmente e complete o percurso da prova;</li>
            <li>É considerado vencedor o atleta que completar a prova, incluindo saltar sobre os obstáculos, no menor tempo.</li>
          </ul>

        </div>
        <div id="LDardo">
          <h2>Lançamento de Dardo</h2>
          <p>O Lançamento de dardo é uma modalidade olímpica do atletismo. Nesta modalidade, o atleta deve lançar o mais longe possível um dardo de ponta metálica, semelhante a uma lança, de até 2,3 metros (feminino) ou 2,7 metros (masculino) de extensão. Feito de metal, fibra de vidro ou material similar, o dardo é mais pesado e longo para competições adultas masculinas: 800 gramas e entre 2,6 e 2,7 metros, e nas femininas pesa 600 gramas e seu comprimento deve ser entre 2,2 e 2,3 metros. Para ampliar o alcance, o competidor sai em disparada na pista com mais de 30 metros de comprimento, porem o dardo não pode cair de qualquer jeito, o lançamento só é válido se a ponta metálica tocar o solo antes de qualquer outra parte.
            Como modalidade olímpica, o dardo foi introduzido em Londres 1908, depois de uma aparição nos não-oficiais Jogos Olímpicos Intercalados de 1906, em Atenas, e o primeiro campeão olímpico foi o sueco Eric Lemming.
          </p>
          <p>Ao contrário das outras modalidades de lançamento (martelo, peso e disco), a técnica do dardo tem regras próprias ditadas pela IAAF e lançamentos "não-ortodoxos" não são permitidos. O dardo precisa ser segurado pela empunhadura e lançado por cima do braço levantado ou dos ombros e, além disso, é proibido ao atleta se virar completamente de maneira que seu rosto fique em direção contrária ao lançamento, técnica muito usada, por exemplo, no lançamento de disco.</p>
        </div>
        <div id="saltoVara">
          <h2>Salto com Vara</h2>
          <p>O salto com vara também é uma modalidade do atletismo, com o salto em altura, o salto em distância e o salto triplo. Nela, o atleta deve saltar por cima de um obstáculo chamado de sarrafo, utilizando uma vara. Assim, seu objetivo é alcançar a maior altura possível, passando pelo sarrafo sem derrubá-lo. Essa modalidade é praticada desde os Jogos da Grécia Antiga, por cretenses e celtas, embora tenha origens atribuídas aos britânicos do século XVII. A prova de salto com vara é disputada pelos homens nos Jogos Olímpicos da Era Moderna desde a primeira edição, em Atenas 1896. Contudo, as mulheres passaram a disputar essa modalidade na edição de Sydney 2000.</p>
          <p>O salto com vara se inicia com uma corrida em uma pista de 45 metros até chegar ao obstáculo, carregando a vara para o salto, cujo tamanho é variável conforme sua estatura. Então, o atleta apoia sua vara no solo e se impulsiona para passar por cima do sarrafo e cair do outro lado. Se conseguir, a altura aumenta e o atleta possui três novas tentativas para saltá-la. Cada atleta possui três tentativas para saltar as alturas determinadas pelos árbitros. Contudo, podem se recusar a saltar uma determinada altura e esperar outra mais elevada.</p>
          <p>Caso o atleta não consiga superar o obstáculo após suas três tentativas, é eliminado da disputa. O mesmo ocorre caso derrube o sarrafo durante as tentativas.
            Em caso de empate, o número menor de tentativas na altura em questão é utilizado como critério de desempate, definindo assim o vencedor. Entretanto, caso não seja suficiente para defini-lo, o segundo critério é o número menor de tentativas durante toda a disputa.
          </p>
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default AbaPista;
