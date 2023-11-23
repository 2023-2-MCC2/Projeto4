import './style.css';
import LogoParis from '../../componentes/LogoOlim'
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function BrasilOlim() {
    return (
        <div className="App">
            <div>
                <Header></Header>
            </div>
            <div className="header">
                <LogoParis></LogoParis>
            </div>
            <div className="conteudo">
                <h3 >Brasil nas Olimpíadas</h3>
                <p className="olim2024">O Brasil é de fato um dos principais nomes nas categorias de competições esportivas mundiais por trazer conquistas, superações, entre outras vitórias por mérito e garra. A história esportiva do Brasil é gigante, temos diversos ídolos que marcaram o meio esportivo, e nas olimpíadas não é diferente, o Brasil é um grande campeão do evento!</p>
                <p className="olim2024">Nosso país acumula um total de 150 medalhas olímpicas nas suas 24 participações da competição, 37 dessas medalhas são de ouro. O país participa da competição desde 1920.</p>
                <p className="olim2024">O Brasil é sem dúvida um dos destaques dos torneios esportivos mundiais, entregando conquistas, triunfos e vitórias alcançadas com determinação e esforço. A história esportiva do país é repleta de conquistas memoráveis ​​e nos Jogos Olímpicos o Brasil brilhou com grande importância.</p>
                <p className="olim2024">Em 24 participações em Jogos Olímpicos, o Brasil acumulou um total de 150 medalhas olímpicas, incluindo 37 medalhas de ouro. Desde a sua estreia em 1920, o país tem demonstrado dedicação e paixão pelas modalidades, provando que a excelência esportiva está enraizada na cultura brasileira.</p>
                <p className="olim2024">Além de números impressionantes, o Brasil também é conhecido por seus atletas talentosos que são considerados ícones e fonte de inspiração para as gerações futuras. De atletas lendários como Pelé no futebol a nomes mais recentes como Ayrton Senna na Fórmula 1, o país tem uma rica tradição de estrelas do esporte que deixaram sua marca não apenas no Brasil, mas em todo o mundo.</p>
                <p className="olim2024">As Olimpíadas são um palco global para celebrar o espírito esportivo e a diversidade cultural, e o Brasil se destacou ao sediar com sucesso os Jogos Olímpicos de Verão de 2016 no Rio de Janeiro. Isto prova a capacidade do país para organizar e acolher eventos esportivos internacionais.</p>
                <p className="olim2024">À medida que o Brasil continua a investir em infra-estruturas desportivas, a desenvolver promessas do esporte e a promover o incentivo da prática de esportes em todo o país, o futuro do Brasil nos Jogos Olímpicos parece ainda mais brilhante. O país está determinado a continuar a sua dinâmica de crescimento e a inspirar o mundo com as suas conquistas no cenário olímpico.</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default BrasilOlim