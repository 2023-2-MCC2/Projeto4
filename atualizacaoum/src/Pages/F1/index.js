import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import './style.css';
import LogoFum from '../../componentes/LogoF1';



function F1() {
  return (
    <div className="App">
      <Header></Header>
      <div className="header">
        <LogoFum></LogoFum>
      </div>
      <div className="conteudo">
        <h3>Classificação</h3>
        <table className="tabelaF1">
          <tr>
            <th>Posição</th>
            <th>Piloto</th>
            <th>Vitórias</th>
            <th>Pólos</th>
            <th>Pontos</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Max Verstappen</td>
            <td>18</td>
            <td>11</td>
            <td>549</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sergio Perez</td>
            <td>2</td>
            <td>2</td>
            <td>273</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lewis Hamilton</td>
            <td>0</td>
            <td>1</td>
            <td>232</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Carlos Sainz Jr</td>
            <td>1</td>
            <td>2</td>
            <td>200</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Fernando Alonso</td>
            <td>0</td>
            <td>0</td>
            <td>200</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Lando Norris</td>
            <td>0</td>
            <td>0</td>
            <td>195</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Charles Leclerc</td>
            <td>0</td>
            <td>5</td>
            <td>188</td>
          </tr>
          <tr>
            <td>8</td>
            <td>George Russel</td>
            <td>0</td>
            <td>0</td>
            <td>160</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Oscar Piastri</td>
            <td>0</td>
            <td>0</td>
            <td>89</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Lance Stroll</td>
            <td>0</td>
            <td>0</td>
            <td>73</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Pierre Gasly</td>
            <td>0</td>
            <td>0</td>
            <td>62</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Esteban Ocon</td>
            <td>0</td>
            <td>0</td>
            <td>58</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Alexander Albon</td>
            <td>0</td>
            <td>0</td>
            <td>27</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Yuki Tsunoda</td>
            <td>0</td>
            <td>0</td>
            <td>13</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Valtteri Bottas</td>
            <td>0</td>
            <td>0</td>
            <td>10</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Nico Hulkenberg</td>
            <td>0</td>
            <td>0</td>
            <td>9</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Daniel Ricciardo</td>
            <td>0</td>
            <td>0</td>
            <td>6</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Guanyu Zhou</td>
            <td>0</td>
            <td>0</td>
            <td>6</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Kevin Magnussen</td>
            <td>0</td>
            <td>0</td>
            <td>3</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Liam Lawson</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>21</td>
            <td>Logan Sargeant</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Nyck De Vries</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>--</td>
            <td>Felipe Drugovich</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>--</td>
            <td>Robert Shwartzman</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
        <h3 id="sobre">Sobre a Fórmula 1</h3>
        <div className="textoF1">
          <p>Quando falamos de Fórmula 1 (F1), estamos falando da competição automobilística mais famosa do mundo e existe há mais de 70 anos. Foi criada em 1950 para unificar as corridas do Grand Prix (Grande Prêmio, em português) da Europa, estabelecendo algumas regras, assim dando o nome de ‘fórmula’, pois essas regras devem ser seguidas rigorosamente pelos construtores, mecânicos e pilotos.</p>
          <p>Exemplo disso é que o regulamento determina limites de tamanho e potência dos carros. Com isso, para serem campeões, as equipes precisam selecionar os pilotos mais competentes e investir bastante na eficiência do design de seus carros.  </p>
          <p>Nomes lendários como Juan Manuel Fangio, Ayrton Senna, Michael Schumacher e Lewis Hamilton surgiram no esporte, que também viu recordes notáveis, como os sete campeonatos mundiais de Schumacher e Hamilton.</p>
          <p>O Grand Prix (GP) é o nome dado a cada corrida (com duração de 2 horas). As corridas ocorrem durante o ano todo, sendo o ano uma temporada da fórmula 1. São de 20 a 23 corridas e o objetivo de cada piloto, em cada GP, é cruzar a linha de chegada mais rapidamente possível, acumulando pontos durante as corridas/ano. </p>
          <p>As pontuações funcionam assim:</p>
          <ul>
            <li>Primeiro colocado: 25 pontos</li>
            <li>Segundo colocado: 18 pontos</li>
            <li>Terceiro colocado: 15 pontos</li>
            <li>Quarto colocado: 12 pontos</li>
            <li>Quinto colocado: 10 pontos</li>
            <li>Sexto colocado: 8 pontos</li>
            <li>Sétimo colocado: 6 pontos</li>
            <li>Oitavo colocado: 4 pontos</li>
            <li>Nono colocado: 2 pontos</li>
            <li>Décimo colocado: 1 ponto</li>
          </ul>
          <p>Desde 2010, a pontuação na Fórmula 1 a cada corrida. E desde a primeira corrida da temporada 2019, é dado um ponto extra ao atleta que fizer a volta mais rápida. Portanto, isso significa que, em uma corrida, um piloto pode ganhar um máximo de 26 pontos — 25 pela vitória e 1 pela volta mais rápida.</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default F1;
