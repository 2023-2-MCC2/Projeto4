import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import LogoNFL from '../../componentes/LogoNFL';
import './style.css';


function NFL() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <div className="header">
          <LogoNFL></LogoNFL>
        </div>
        <div className="conteudo">
          <div className='sobreNFL'>
            <h3>Sobre a NFL</h3>
            <p>O NFL (National Football League),  é um dos maiores campeonatos esportivos dos Estados Unidos, senão, do mundo. Com participação de 32 times, divididos igualmente entre duas conferências: a National Football Conference (NFC) e a American Football Conference (AFC).</p>
            <p>A temporada de clube da NFL tem duração de 17 semanas, entre setembro e dezembro, com cada time disputando 16 partidas, tendo apenas uma semana de folga. Após a conclusão da fase regular da temporada, 6 times de cada conferência (quatro campeões de divisão e dois times de repescagem) avançam para os playoffs, para chegar a grande final, o  famoso Super Bowl, que normalmente é disputado no primeiro domingo de fevereiro e coloca frente a frente os campeões da NFC e da AFC.</p>
            <p>A NFL é o esporte com a maior média de público por jogo, uma média de 67 mil torcedores. O time campeão da liga, recebe o troféu ‘Vince Lombardi Trophy’, que foi criado em homenagem ao Vince Lombardi, que foi o técnico do Green Bay Packers que venceu as duas primeiras edições do Super Bowl. O troféu, que é feito pela Tiffany & Co., contendo pratas esterlinas, fica com a equipe vencedora que também ganha a oportunidade de escolher uma companhia para fazer seus anéis de campeões, assim, cada anel é  personalizado pela equipe vencedora, tornando se único (mas a NFL exige algumas especificações, como a exigência do logo do Super Bowl).</p>
            <br />
            <p>Como funciona o jogo da NFL:</p>
            O objetivo do jogo é levar a bola oval até a end zone do adversário, isto é, as áreas coloridas em cada extremidade do campo. Para isso, os times alternam campanhas, onde devem avançar pela defesa rival até esse ponto, o que configura um touchdown.
            <p>A cada campanha, os times, de 11 jogadores, devem avançar no mínimo dez jardas a cada jogada para continuar atacando. Eles têm quatro chances para isso, as chamadas descidas. Todas elas se iniciam da mesma maneira: a bola é posta na linha imaginária de scrimmage (que separa a defesa e ataque) e recuada para o quarterback, o cérebro da equipe.</p>
            <p>Ao receber a bola, ele tem basicamente três opções: lançar para alguém à sua frente, entregar nas mãos de algum colega de equipe para que este tente correr com a bola em sua posse, ou ele mesmo arriscar uma corrida com bola rumo ao ataque. Se o time não avançar dez jardas a partir de onde o scrimmage estava na primeira descida, após as quatro tentativas, a posse vai para o adversário.</p>
            <p>O sistema de pontuação se dá assim: um touchdown vale seis pontos e dá direito a uma jogada extra, escolhida pelo time. Pode-se tentar um novo mini touchdown, partindo de duas jardas antes da end zone, que vale dois pontos, ou então chutar um field goal de quinze jardas, valendo um ponto. Para field goals realizados durante jogadas regulares, o valor é de três pontos.</p>
            <p>Existe outra forma de pontuar, apesar de rara. Se o time que está atacando tiver a jogada interrompida na própria end zone, o adversário marca dois pontos.</p>
          </div>
        </div>
      </body>
      <Footer></Footer>
      <script></script>
    </div>

  );
}

export default NFL;
