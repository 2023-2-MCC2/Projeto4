import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not7 from '../../imagens/not7.svg'


function Pan() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Jogos Pan-Americanos</h2>
                <p>Os Jogos Pan-Americanos são uma celebração do esporte que reúne atletas de todo o continente americano a cada quatro anos. Este evento multiesportivo oferece uma plataforma para competições emocionantes e amistosas entre as nações das Américas. Os Jogos Pan-Americanos foram fundados em 1951. Seu principal objetivo é fomentar a amizade e o entendimento entre os países participantes por meio de competições esportivas.</p>
                <div id="mapa2026">
                    <img src= {Not7} alt="Imagem da logo dos Jogos Pan-Americanos de Santiago"/>
                </div>
                <p>Durante os Jogos Olímpicos, atletas de diversas modalidades como atletismo, natação, basquete, futebol, etc. competirão por medalhas de ouro, prata e bronze. O evento não só destaca a excelência no desporto, mas também fortalece os laços culturais e sociais entre os países representados.</p>
                <p>O Brasil tem uma história marcante nos Jogos Pan-Americanos, emergindo como uma potência esportiva no cenário do continente. Desde a sua primeira participação, em 1951, o país se destacou pela conquista de medalhas em diversas modalidades esportivas e por surpreender o público com seu talento esportivo.</p>
                <p>O desempenho do Brasil nos Jogos Pan-Americanos reflete a paixão do país pelo esporte e o compromisso de seus atletas com a excelência. Em modalidades como futebol, vôlei, judô e atletismo, o Brasil conquistou medalhas de ouro, prata e bronze, demonstrando a diversidade e a qualidade dos talentos esportivos do país.</p>
                <p>Além de vencer na prova individual, o Brasil também brilhou na prova por equipes e se consolidou como uma seleção forte nos Jogos Pan-Americanos. O espírito competitivo aliado ao fair play tem sido uma característica marcante da participação brasileira, conquistando não apenas títulos, mas também respeito e admiração de outros países participantes.</p>
                <p>Cada edição dos Jogos Pan-Americanos tem um local diferente e atrai um público diferente, reunindo torcedores apaixonados e espectadores casuais. A intensa competição, as histórias de superação e as emoções vividas durante os Jogos Olímpicos fazem deste evento um marco importante na história do esporte nas Américas.</p>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Pan