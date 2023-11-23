import './style.css';
import LogoParis from '../../componentes/LogoOlim'
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function Olim2024() {
  return (
    <div className="App">
        <div>
            <Header></Header>
        </div>
      <div className="header">
        <LogoParis></LogoParis>
      </div>
      <div className="conteudo">
        <h3 >Olímpiadas 2024</h3>
        <p className="olim2024">O evento esportivo mais esperado mundialmente está para chegar no segundo semestre de 2024, as Olimpíadas!!</p>
        <p className="olim2024">Sendo realizada a cada quatro anos, as Olimpíadas se encontram na sua 33ª edição, sendo essa a terceira vez em que França é escolhida como sede da competição, a primeira foi em 1900 e a segunda em 1924.</p>
        <p className="olim2024"> No dia 26 de julho de 2024 será realizada a abertura dos jogos, um evento antecipado que ocorre como apresentação dos atletas de cada modalidade dos países participantes, essa será a primeira vez em anos em que a cerimônia não será feita em um estádio, nesta edição, será feita no Rio Sena, o rio que atravessa Paris. Os atletas estarão desfilando em barcos representando suas nacionalidades em frente a milhares de pessoas. O desfile termina seu percurso na frente do Trocadero, após percorrer 6 km no Sena.</p>
        <strong><p className="olim2024">Novas modalidades</p></strong>
        <p className="olim2024">A competição trará também novas modalidades para a grade de esportes olímpicos, sendo eles o breaking, um esporte em que o ritmo e o corpo formam um só, é conhecido como “break dance”, é o estilo de dança das ruas, muito caracterizada pelo hip hop. A outra modalidade que foi acrescentada foi a canoagem slalom extremo, reconhecida por ser chamada de “caiaque cross”, onde quatro embarcações disputam quem termina o percurso primeiro.</p>
        <strong><p className="olim2024">Importância das Olimpíadas</p></strong>
        <p className="olim2024">A Olimpíada é a maior competição de esporte do mundo, trazendo o maior nível de rendimento de jogo apresentado mundialmente, essa competição incentiva a prática de esportes de todas as populações trazendo união tanto do povo quanto das nações. Essa competição também é importante economicamente para o país que é sede dela, através do turismo, o país recebe mais do que foi investido para a competição. O principal objetivo das Olimpíadas é trazer união, paz, e harmonia entre todas as nações através desse evento esportivo, além de incentivar a prática esportiva nos países.</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Olim2024;