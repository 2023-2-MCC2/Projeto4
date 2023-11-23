import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not9 from '../../imagens/not9.svg'


function Mulher() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Mulheres no esporte</h2>
                <p>Por anos a prática do esporte foi restrita para as mulheres, sendo imposto pela
sociedade que só os homens poderiam praticar as modalidades da época. Na Grécia
Antiga, época em que as mulheres não tinham tantos direitos e eram destinadas a cuidar
das tarefas de casa e servir aos homens, elas não podiam nem participar e nem assistir aos
Jogos Olímpicos, que na época eram conhecidos como Panateneias. As mulheres eram
proibidas de assistir aos jogos, e caso tentassem ver, podiam ser condenadas à morte.</p>
                <div id="mapa2026">
                    <img src= {Not9} alt="Imagem de um jogo de voleibol feminino"/>
                </div>
                <p>Na idade média, a situação já havia mudado, fazendo com que as mulheres pudessem assistir aos jogos e em alguns casos específicos e culturais podendo até participar. 
No final do século XIX e começo do XX, as mulheres começaram a se fazer presente no esporte e com isso começaram a fazer com que as modalidades femininas ganhassem força.</p>
                <p>Em 1900 ocorreu a primeira edição dos jogos olímpicos com a participação das mulheres e foi um avanço muito significativo na história das mulheres no esporte, desde então, os esportes femininos vem ganhando força, reconhecimento e principalmente quebrando barreiras ao longo do tempo.</p>
                <p>Atualmente temos grandes nomes e referências no esporte, por exemplo Serena Williams que se tornou uma das maiores tenistas do mundo, carregando consigo inúmeras conquistas em Grand Slam.</p>
                <p>Marta no futebol que se tornou uma grande jogadora, uma das maiores no mundo, tendo uma carreira excepcional e vários prêmios.
Simone Biles é conhecida no meio da ginástica artística como uma das mais talentosas e de fato é uma inspiração.</p>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Mulher