import './style.css';
import LogoParis from '../../componentes/LogoOlim'
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function Curio() {
  return (
    <div className="App">
         <Header></Header>
        <div className="App-header"> 
        </div>
      <div className="header">
        <LogoParis></LogoParis>
      </div>
      <div className="conteudo">
        <h3 > Curiosidades</h3>
        <div className="curiosidades">
        <p className="curiosidade">As Olimpíadas tiveram suas origem na Grécia Antiga, sendo um festival atlético e religioso, a primeira edição foi realizada por volta de 776 A.C. A competição prestava rituais a deuses gregos.</p>
        <p className="curiosidade">  O Hino Olímpico, tocado nas cerimônias de abertura e encerramento dos Jogos Olímpicos, é conhecido como “Hino a Apolo”, e foi escrito por um poeta grego chamado Costis Palmas e a música composta por Spyridon Samaras.</p>
        <p className="curiosidade"> O símbolo das Olímpiadas é representada por 5 aros de cores diferentes, esses aros representam cada continente do mundo sendo eles, Europa (aro azul), Ásia (aro amarelo), África (aro preto), Oceania (aro verde) e América (aro vermelho).</p>
        <p className="curiosidade">O Brasil teve sua primeira participação nos Jogos Olímpicos na edição de 1920 sediada na Bélgica.</p>
        <p className="curiosidade">A competição trará também novas modalidades para a grade de esportes olímpicos, sendo eles o breaking, um esporte em que o ritmo e o corpo formam um só, é conhecido como “break dance”, é o estilo de dança das ruas, muito caracterizada pelo hip hop. A outra modalidade que foi acrescentada foi a canoagem slalom extremo, reconhecida por ser chamada de “caiaque cross”, onde quatro embarcações disputam quem termina o percurso primeiro.</p>
        <p className="curiosidade">O maior medalhista olímpico é o nadador Michael Phelps, tendo consigo 28 medalhas, entre elas, 23 de ouro, 3 de prata e 2 de bronze.</p>
        <p className="curiosidade">Desde a edição de Munique, em 1972, começou a participação dos Mascotes Olímpicos.</p>
        <p className="curiosidade">A nadadora Maria Lenk foi a primeira brasileira a participar das Olimpíadas.</p>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Curio;