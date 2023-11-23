import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not5 from '../../imagens/not5.svg'


function Marta() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Última copa da Marta</h2>
                <p>A última Copa do Mundo de Marta foi uma demonstração de habilidade, determinação e liderança. A atleta brasileira, fenômeno do futebol brasileiro, provou mais uma vez porque é uma das maiores jogadoras de futebol de todos os tempos.</p>
                <div id="mapa2026">
                    <img src= {Not5} alt="Imagem da Marta"/>
                </div>
                <p>Desde a primeira partida, a atacante brasileira mostrou sua destreza impressionante, driblando adversários com facilidade e deixando sua marca em seus admiradores. Sua presença em campo não foi apenas atlética, mas também inspirou novas gerações que assistiram com espanto suas atuações.</p>
                <p>Além de seu talento técnico, Marta também desempenha importantes funções de liderança dentro e fora de campo.Sua experiência e disciplina em situações difíceis ajudaram a motivar a equipe e a orientar as jovens jogadoras. A forma como comunica e age como uma verdadeira capitã contribuiu significativamente para o desempenho geral da seleção feminina.</p>
                <p>A jornada para conquistar a vitória não é apenas o objetivo pessoal de Marta, mas também o desejo de levar o Brasil ao topo da glória. Seu querer e sua força de vontade é evidente em todas as partidas que joga, se mostrando uma verdadeira guerreira. Mesmo nos momentos mais complicados a Marta não desistiu, manteve viva a chama da esperança e inspirou os seus companheiros a darem o seu melhor.</p>
                <p>Ao final da Copa, independentemente do resultado final, a recente Copa do Mundo de Marta deixou um legado no mundo do futebol. Quer sejam os seus excelentes gols, as suas assistências habilidosas ou a sua liderança digna de uma capitã, Marta continua a escrever o seu nome na história do esporte. Verdadeira lenda que transcende fronteiras e gerações, a recente Copa da Marta foi mais uma página gloriosa de sua extraordinária carreira.</p>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Marta