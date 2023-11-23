import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not8 from '../../imagens/not8.svg'


function ParaOlim() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Paralimpíadas</h2>
                <p>As Paralimpíadas são um evento esportivo realizado a cada quatro anos para pessoas com deficiências. Os jogos Paralímpicos são responsabilidade do Comitê Paralímpico Internacional, embora exista uma parceria desse comitê com o COI, o Comitê Olímpico Internacional. Essa parceria definiu, por exemplo, que a mesma sede escolhida para os Jogos Olímpicos seria a dos Jogos Paralímpicos.</p>
                <div id="mapa2026">
                    <img src= {Not8} alt="Imagem de corrida paraolímpica"/>
                </div>
                <p>A considerada primeira edição foi em 1960 quando a edição do Stoke Mandeville Games foi levada para a cidade que sediava os Jogos Olímpicos e foi realizada com a presença de 400 atletas de 23 países. Somente 4 anos depois, em 1964, esse evento passou a ser reconhecido como Jogos Paralímpicos.</p>
                <p>As modalidades dos jogos tem um sistema de classificação funcional, com o objetivo de classificar os atletas em diferentes níveis de deficiência em busca de disputas mais justas. Essa classificação possui três avaliações que investigam a deficiência e as limitações físicas dos atletas. Caso o atleta participe de mais de uma modalidade, ele precisa fazer as avaliações para cada uma delas, podendo receber classificações distintas.</p>
                <p>Os tipos de deficiência incluídos nas Paralimpíadas são: motoras, amputados, cegos, pessoas que sofreram com paralisia cerebral e que possuem alguma deficiência mental.</p>
                <p>Atualmente os esportes incluídos nos Jogos Paralímpicos de Verão são:</p>
                <ul>
                    <li>Atletismo</li>
                    <li>Badminton</li>
                    <li>Basquetebol em cadeira de rodas</li>
                    <li>Bocha</li>
                    <li>Canoagem</li>
                    <li>Ciclismo</li>
                    <li>Esgrima em cadeira de rodas</li>
                    <li>Futebol de 5</li>
                    <li>Goalball</li>
                    <li>Hipismo</li>
                    <li>Judô</li>
                    <li>Levantamento de peso</li>
                    <li>Natação</li>
                    <li>Remo</li>
                    <li>Rugby em cadeiras de rodas</li>
                    <li>Taekwondo</li>
                    <li>Tênis de mesa</li>
                    <li>Tênis em cadeira de rodas</li>
                    <li>Tiro</li>
                    <li>Tiro com arco</li>
                    <li>Triatlo</li>
                    <li>Voleibol sentado</li>
                </ul>
                <br/>
                <p className="textinho"><strong>Brasil nas Paralimpíadas</strong></p>
                <p>A primeira participação brasileira só aconteceu em 1972 e a primeira medalha foi alcançada apenas na edição de 1976. A partir da década de 1980, o Brasil começou a ter um alto desenvolvimento nos esportes paralímpicos, e, em 1995, surgiu o Comitê Paralímpico Brasileiro.</p>
                <p>Hoje em dia o Brasil é considerado uma das maiores potências dos esportes paralímpicos.</p>
                <p>Por fim, é muito bom dizer que uma das ONGs parceiras do site é uma associação voltada ao esporte para deficientes a ADD! Saiba mais sobre o trabalho deles no rodapé do site!</p>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default ParaOlim