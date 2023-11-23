import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not3 from '../../imagens/not3.svg'


function Doping() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Doping Esportivo</h2>
                <p>O doping no esporte é alegado quando são encontradas substâncias proibidas pelo Comitê Olímpico Internacional (COI), em atletas de alto rendimento. Essas substâncias são proibidas por causar alteração no desempenho de atletas, como a melhora da resistência muscular, ganho de massa muscular, perda de peso mais rapidamente, alívio da fadiga muscular e etc., ocasionando melhores resultados em provas e campeonatos. Essas alterações no desempenho dos atletas são artificiais, momentâneas e assim, consideradas desonestas e anti ética no esporte.</p>
                <div id="mapa2026">
                    <img src= {Not3} alt="Imagem da logo dos Jogos Pan-Americanos de Santiago"/>
                </div>
                <p>Atletas que testam positivo e tem o uso comprovado de qualquer substância proibida pelo COI, como eritropoetina, furosemida, energéticos e anabolizantes são punidos com afastamento da prática esportiva por um tempo determinado em julgamento e, podem até ter que devolver os prêmios, como medalhas e troféus que ganharam durante a prática.</p>
                <p>O exame antidoping é feito através de coleta de sangue ou urina do atleta, podendo ser coletado antes, durante e depois de campeonatos, ou até mesmo em períodos fora de competições, sem aviso prévio. Caso o atleta se negue a realizar a coleta dos exames, a Autoridade Brasileira de Controle de Dopagem (ABCD) considera essa atitude como doping, e o atleta pode vir a ser penalizado do mesmo jeito.</p>
                <p>Como são vários os tipos de medicamentos e substâncias que podem ser considerados doping, atletas e suas comissões técnicas recebem uma lista de medicamentos e 56353 substâncias que são proibidos no esporte para terem conhecimento do produto. Esses são alguns produtos mais utilizados:</p>
                <ul>
                    <li>Eritropoetina (EPO): ajuda aumentar as células que carregam oxigênio no sangue;</li>
                    <li>Furosemida: potente diurético que ajuda a diminuir o peso rapidamente, usado principalmente por atletas de luta com categorias de peso;</li>
                    <li>Energéticos: aumentam a disposição, diminuindo a sensação de cansaço;</li>
                    <li>Anabolizantes: aumenta a força e a massa muscular. Algumas substâncias podem também imitar o efeito dos anabolizantes, como é o caso da osmarina (substância encontrada no corpo da oposta da seleção brasileira de vôlei, Tandara Caixeta), que imita a ação da testosterona.</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Doping