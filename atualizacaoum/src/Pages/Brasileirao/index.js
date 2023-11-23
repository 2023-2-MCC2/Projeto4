import './style.css';
import Logob from '../../componentes/LogoBr'
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';


function Brasileiro() {
  return (
    <div className="App">
        <div>
            <Header></Header>
        </div>
        <div className="header">
            <Logob></Logob> 
        </div>      
      <body>
        <div className="conteudo">
          <h3>Tabela Série A</h3>
          <table className="tabelaBr">
            <tr>
              <th>Posição</th>
              <th>Time</th>
              <th>Pontos</th>
              <th>J</th>
            </tr>
          <tr>
            <td>1</td>
            <td>Palmeiras SP</td>
            <td>62</td>
            <td>34</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Botafogo FR RJ</td>
            <td>60</td>
            <td>33</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gremio</td>
            <td>59</td>
            <td>34</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Red Bull Bragantino SP</td>
            <td>59</td>
            <td>33</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Altlético Mineiro MG</td>
            <td>57</td>
            <td>34</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Flamengo</td>
            <td>57</td>
            <td>33</td>
          </tr>
          <tr>
            <td>7</td>
            <td>CA Paranaense PR</td>
            <td>51</td>
            <td>34</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Fluminense RJ</td>
            <td>50</td>
            <td>34</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Cuiabá Esporte Clube MT</td>
            <td>47</td>
            <td>34</td>
          </tr>
          <tr>
            <td>10</td>
            <td>São Paulo FC SP</td>
            <td>46</td>
            <td>34</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Corinthians SP</td>
            <td>44</td>
            <td>34</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Fortaleza CE</td>
            <td>43</td>
            <td>33</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Internacional RS</td>
            <td>43</td>
            <td>34</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Santos FC SP</td>
            <td>42</td>
            <td>34</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Vasco Gama</td>
            <td>41</td>
            <td>34</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Cruzeiro</td>
            <td>41</td>
            <td>34</td>
          </tr>
          <tr>
            <td className="rebaixados">17</td>
            <td>Bahia</td>
            <td>38</td>
            <td>34</td>
          </tr>
          <tr>
            <td className="rebaixados">18</td>
            <td>Goiás EC GO</td>
            <td>35</td>
            <td>34</td>
          </tr>
          <tr>
            <td className="rebaixados">19</td>
            <td>Coritiba PR</td>
            <td>29</td>
            <td>34</td>
          </tr>
          <tr>
            <td className="rebaixados">20</td>
            <td>América FC MG</td>
            <td>21</td>
            <td>34</td>
          </tr>
          </table>
          <div className='sobreBrasileiro'>
            <h3>Sobre o Brasileirão</h3>
            <p>O Campeonato Brasileiro é organizado pela Confederação Brasileira de Futebol (CBF) e é dividido em quatro divisões principais: Série A, Série B, Série C e Série D. A Série A do Brasileirão é composta por 20 clubes que se enfrentam em um formato de todos contra todos. Cada time joga 38 partidas ao longo da temporada, 19 em casa e 19 fora. </p>
            <p>As equipes ganham três pontos por vitória, um ponto por empate e nenhum ponto por derrota. Se dois ou mais times terminarem a fase de pontos corridos com o mesmo número de pontos, o desempate é feito por critérios de desempate.</p>
            <p>O primeiro critério de desempate é o número de vitórias. Se o número de vitórias também for igual, o saldo de gols é usado como critério de desempate. Se o saldo de gols também for igual, o maior número de gols marcados é usado como critério de desempate. Se ainda assim houver empate, outros critérios de desempate, como cartões amarelos e vermelhos, são usados.</p>
            <p>As quatro equipes com os piores desempenhos na Série A são automaticamente rebaixadas para a Série B do ano seguinte. Da mesma forma que as quatro melhores da série B sobem para a Série A, substituindo os times rebaixados.</p>
          </div>
        </div>
      </body>
      <div></div>
      <Footer></Footer>
    </div>
  );
}

export default Brasileiro;
